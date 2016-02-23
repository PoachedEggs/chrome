'use strict';

import tr from 'tiny-react';
import Toggler from './toggler';
import Direction from './direction';
import FileList from './file-list';
import {PAGE} from '../../app/action-names';
import {dispatch} from '../app/store';

export default tr.component({
    render(props) {
        var content;
        if (props.enabled) {
            content = <div className="popup__content">
                <FileList {...props.model} active={props.ui.activePicker} />
                <button className="add-file">Add stylesheet</button>
            </div>;
        }

        return <div className="popup">
    		<fieldset className="activity">
                <Toggler name="enabled" checked={props.enabled} onClick={toggleEnabled} />
    			<label htmlFor="fld-enabled">Enable LiveStyle</label>
    			<em>for current page with
                    <Direction direction={props.model.direction} />
                updates</em>
    		</fieldset>
            {content}
    	</div>
    }
});

function toggleEnabled() {
    dispatch({type: PAGE.TOGGLE_ENABLED});
}
