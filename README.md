#React-Hoisted-State

Embed and extract State from The React Tree

#Examples

```js
import {Hoist,State} from 'react-hoisted-state'


function visit(obj){
  console.log(obj);
}

React.render(
  <Hoist visit={visit} >
    <div>
      <State title="test" />
      <div>
        <State title="test2" />
      </div>
    </div>
  </Hoist>,
  elem
);

```

```js

var keywords= [];

function visit(obj){
  if(obj.keywords) meta = meta.concat(keywords);
}

const Keywords = ({[...keywords]})=>(
<h2>
  {keywords.join(', ')}
  <State keywords={keywords}/>
</h2>
);


const body = React.renderToString(
  <Hoist visit={getKeywords} />
    <article>
      <Keywords keywords={['react','test','hoisted-state']} />
      <Title>How to Hoist State</Title>
      foo
    </article>

    <article>
      <Keywords keywords={['another article']} />
      <Title>some other article </Title>
      bar
    </article>
  </Hoist>
);

const html = `
<html>
<head>
<meta name="keywords" content="${keywords.join(', ')}" />
<title>titles.join(' - ')</title>
</head>
<body>${body}</body>
</html>
`

```
