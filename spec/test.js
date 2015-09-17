import {Hoist,State} from '../src/index'
import React, {renderToString} from 'react'


describe('hoisted-state-tests', ()=> {
  it('should hoist state when rendered', ()=> {
    var hoisted = [];

    function visit(obj) {
      hoisted.push(obj);
    }


    renderToString(
      <Hoist match={visit} >
        <div>
          <State id={1} />
          <div>
            <State id={2} />
          </div>
        </div>
        <State id={3}/>
      </Hoist>
    )

    hoisted.should.eql([
      { id:1 }, { id:2 }, { id:3 }
    ])


  });
});
