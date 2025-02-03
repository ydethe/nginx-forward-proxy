#@# vim: set filetype=dockerfile:
FROM alpine:3.16.1
LABEL maintainer="Yann DE THE <github.com/ydethe>"

##
# dependent packages for docker build
##

WORKDIR /tmp

RUN apk update && \
    apk add       \
      alpine-sdk  \
      openssl-dev \
      pcre-dev    \
      zlib-dev    \
      perl

# https://github.com/chobits/ngx_http_proxy_connect_module?tab=readme-ov-file#build-openresty
RUN curl -LSs  https://openresty.org/download/openresty-1.19.3.1.tar.gz -O                                       && \
    tar xf openresty-1.19.3.1.tar.gz                                                                             && \
    cd openresty-1.19.3.1                                                                                        && \
    git clone https://github.com/chobits/ngx_http_proxy_connect_module                                           && \
    ./configure --add-module=./ngx_http_proxy_connect_module                                                     && \
    patch -d build/nginx-1.19.3/ -p 1 < ./ngx_http_proxy_connect_module/patch/proxy_connect_rewrite_101504.patch && \
    make -j $(nproc)                                                                                             && \
    make install                                                                                                 && \
    rm -rf /tmp/*                                                                                                && \
    mkdir /logs

##
# application deployment
##

WORKDIR /

COPY ./nginx.conf /conf/nginx.conf
COPY ./conf.d/nginx.conf /conf/conf.d/nginx.conf
COPY ./proxy_auth.lua /proxy_auth.lua

EXPOSE 3128

STOPSIGNAL SIGTERM

CMD [ "/usr/local/openresty/nginx/sbin/nginx", "-g", "daemon off;", "-p", "/", "-c", "conf/nginx.conf" ]
