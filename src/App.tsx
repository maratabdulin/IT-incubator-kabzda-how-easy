import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/rating/rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/accordion/accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false);

    return (
        <div className="App">
            <AppTitle title={'This is APP component'}/>
            <hr/>
            Article 1
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
                items={[{title: 'Marat', value: 11}]}
                onClick={()=>{}}
            />
            {/*<Accordion titleValue={'User list'} collapsed={true}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'User List'}/>
            <hr/>
            Article 2
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <hr/>
            Article 3
            <OnOff on={on} onChange={setOn}/>
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

const AppTitle = (props: AppTitlePropsType) => {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
