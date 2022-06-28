import React from 'react';
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff
}

const callback = action('On Off Clicked!')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>

