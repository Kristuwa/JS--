//------------------task-1--------------------------//
/*У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?*/
const liList = document.querySelectorAll("li");
[...liList].map((item) =>
  alert(`${item.firstChild.data}: ${item.querySelectorAll("li").length}`)
);

//------------------task-2--------------------------//

/*Что содержит свойство nodeType?
важность: 5
Что выведет этот код?

<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType); // 1;
  </script>
</body>

</html>*/

//------------------task-3--------------------------//

/*Тег в комментарии
важность: 3
Что выведет этот код?

<script>
  let body = document.body;
  body.innerHTML = "<!--" + body.tagName + "-->";
  alert( body.firstChild.data ); // BODY
</script>*/

//------------------task-4--------------------------//

/*Где в DOM-иерархии "document"?
важность: 4
Объектом какого класса является document? - класса Document.

Какое место он занимает в DOM-иерархии? - Глобальный объект, Он служит точкой входа в DOM.

Наследует ли он от Node или от Element, или может от HTMLElement? -Document, по историческим причинам часто наследуется HTMLDocument, Document, Node    */
