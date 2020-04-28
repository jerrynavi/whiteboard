import React, { FC, lazy, Suspense } from 'react';
import Progress from 'react-topbar-progress-indicator';

const Canvas = lazy(() => import('../../components/canvas/Canvas'));

const Editor: FC = () => {

    return (
        <div className="p-8">

            <div className="shadow-md">
                <Suspense fallback={<Progress />}>
                    <Canvas />
                </Suspense>
            </div>


        </div>
    );
};

export default Editor;
