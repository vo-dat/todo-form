import React from 'react';
import PropTypes from 'prop-types';

ListInfo.propTypes = {
    listInfo:PropTypes.array,
};
ListInfo.defauftProps={
    listInfo:[],
}

function ListInfo(props) {
    const {listInfo} = props;
    return (
        <tbody>
            {listInfo.map((info,index)=>(
                <tr key={index}>
                <td>{info.txtName}</td>
                <td >{info.txtPassword}</td>
                <td>{info.sltgender}</td>
            </tr>
            ))}    
        </tbody>
    );
}

export default ListInfo;