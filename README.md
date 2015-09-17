#React-Hoisted-State

Embed and extract State from The React Tree

#Examples

```js

var keywords= [];

function visit(obj,event){
  switch(event){
    case 'mount':
    case 'unmount' :
    case 'render' :
      //`this` is the component, do sth. with it...
    break;
  }

  if(obj.keywords) keywords = keywords.concat(keywords);

}

const Title = ({children})=>(
<State title={children.toString()}/><h2>
  {children.toString()}
</h2></State>
);


const body = React.renderToString(
  <Hoist visit={getKeywords} />
    <article>
      <Title>How to Hoist State</Title>
      foo
    </article>

    <article>
      <Title>some other article </Title>
      bar
    </article>
  </Hoist>
);

const html = `
<html>
<head>
<title>titles.join(' - ')</title>
</head>
<body>${body}</body>
</html>
`

```
