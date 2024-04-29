import data from "./data.js"
import styles from "./Accordion.module.css";
import { useState } from "react";

function Accordion() {
    const [select, setSelect] = useState(null);


    function handleSingleSelection(getCurrentId) {
         setSelect(getCurrentId === select ? null: getCurrentId);
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.accordion}>
                    {data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className={styles.item} key={dataItem.id}>
                                <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                                    <h3>{dataItem.question}</h3>
                                    <span className={styles.center}>+</span>
                                </div>
                                <div className={styles.answer}>
                                    {
                                        select === dataItem.id ?
                                            <div>
                                                {dataItem.answer}
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Data not available</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Accordion;
