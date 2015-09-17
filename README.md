#React-Hoisted-State

Embed and extract State from The React Tree

#Examples

```js
import {Hoist,State} from 'react-hoisted-state'


function visit(obj,event){
  console.log(obj,event); // events : ['update','mount','unmount']
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

function visit(obj,event){
  if(obj.keywords) keywords = keywords.concat(keywords);
  //`this` is the react component
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
