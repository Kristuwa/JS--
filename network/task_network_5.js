/*Почему нам нужен Origin?
важность: 5
Как вы, вероятно, знаете, существует HTTP-заголовок Referer, который обычно содержит адрес страницы, инициировавшей сетевой запрос.

Например, при запросе (fetch) http://google.com с http://javascript.info/some/url заголовки выглядят так:
*/
// Accept: */*
Accept-Charset: utf-8;
Accept-Encoding: gzip,deflate,sdch;
Connection: keep-alive;
Host: google.com;
Origin: http://javascript.info;
Referer: http://javascript.info/some/url;
/*Как вы можете видеть, присутствуют и Referer, и Origin.

Вопросы:

Почему нужен Origin, если Referer содержит даже больше информации?
Возможно ли отсутствие Referer или Origin, или это неправильно?*/

/*заголовок Origin содержит именно источник (домен/протокол/порт), без пути.Сервер может проверить Origin и, если он согласен принять такой запрос, добавить особый заголовок Access-Control-Allow-Origin к ответу. Этот заголовок должен содержать разрешённый источник (в нашем случае https://javascript.info) или звёздочку *. Тогда ответ успешен, в противном случае возникает ошибка.
Referer может отсутсвовать, когда мы запрашиваем через fetch HTTP-страницу с HTTPS (менее безопасный доступ с более безопасного).
Referer не надежен, поэтому есть Origin.*/