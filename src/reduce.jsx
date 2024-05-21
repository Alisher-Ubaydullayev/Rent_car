import React, { useReducer } from 'react'
import { Container } from './secund_style';
import TimerComp from './secund';

const proj = (state, action) => {
switch(action.type){
  case "show":
    return{showText: !state.showText};

    default:
        return state;
};


};


const Reduce = () => {
const [state, click] = useReducer(proj,{
showText:true
});

return(<div>
    <button
     onClick={()=>{
    click({ type:'show'});
}}>clic</button>

{state.showText && <TimerComp/>}

</div>
);
};

export default Reduce
