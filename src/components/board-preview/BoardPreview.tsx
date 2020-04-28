import React, { FC, ReactNode } from 'react';
import styles from './BoardPreview.module.scss';

interface Props {
    readonly children: ReactNode;
}

const BoardPreview: FC<Props> = (props) => {

    return (
        <div className={styles.board}>
            <div className={styles.inner}>
                <div
                    id={styles.content}
                    className="shadow-md flex justify-center items-center"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default BoardPreview;
