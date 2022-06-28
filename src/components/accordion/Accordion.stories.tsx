import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('Accordion changed element fired')

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UnCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={()=> setValue(!value)}/>
}
