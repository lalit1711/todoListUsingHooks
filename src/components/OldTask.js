import React from 'react';
export function OldTask(prop) {
    const _data = prop.data.reverse()
    return(
        <div>
            {
                _data.map((v,i) => {
                    return(
                        <li key={i} style={style.liBorder} className={v.priorty}>{i+1}. &nbsp; {v.text} @ {v.time}
                        </li>
                    )
                })
            }
        </div>
    )
}

const style = {
    liBorder:{
        border: "1px solid black",
        width: "97%",
        padding: "10px 7px",
        margin: "10px 7px",
        borderRadius:5,
        listStyleType: "none"
    },
    ulBorder:{
        border: "1px solid black",
        width: "90%",
        padding: "10px 7px",
        marginLeft: "30px",
        listStyleType: "none"
    },
    inputBox:{
        width: "35%",
        border: "none",
        fontSize: "14px",
        paddingVertical: "-5px",
        marginBottom:10
    },
    button:{
        color: "white",
        "padding": "10px 7px",
        "background": "blue",
        fontSize:20,
        fontWeight:600,
        borderRadius: 5,
        float:"right",
        marginTop:"-27px",
        cursor:"pointer"
    },
    span:{
        float:"right",
        border:"1px solid black",
        padding: "1px 3px",
        cursor:"pointer",
        borderRadius:50
    },
    high:{
        background:"red"
    }
}


export default OldTask