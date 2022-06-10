import React from 'react';
import './App.css';
import Rating from "./components/rating/rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <AppTitle title={'This is APP component'}/>
            <hr/>
            Article 1
            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<Accordion titleValue={'User list'} collapsed={true}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'User List'}/>
            <hr/>
            Article 2
            <UncontrolledRating/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <hr/>
            Article 3
            <OnOff/>
            <OnOff/>
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
