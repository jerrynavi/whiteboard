import React, { FC, useState, useEffect } from 'react';
import styles from './Canvas.module.scss';
import { Input, Form, Divider, Tooltip, Button, Popover, InputNumber } from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { BlockPicker } from 'react-color';
import { showNotification, messages, actions, constants } from '../../utils';
import { Board } from '../../interfaces/board.interface';
import { connect } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';

const LEFT_MOUSE_BUTTON = 1;
const formItemStyles: React.CSSProperties = {
    marginBottom: 0,
};
const inputStyles: React.CSSProperties = {
    width: '50px',
};
const pickerOpts = {
    triangle: 'hide',
};
const pickerStyles = {
    'default': {
        card: {
            boxShadow: 'none',
            border: '1px solid rgba(0,0,0,0.1)',
        },
        head: {
            borderBottom: '1px solid rgba(0,0,0,0.05)',
        },
    },
};

const { Item } = Form;
const { Search } = Input;

interface Props {
    dispatch(action: AnyAction): void;
}

const Canvas: FC<Props> = (props) => {

    const { dispatch } = props;

    const [canvas, setCanvas] = useState(null as null | globalThis.HTMLCanvasElement);
    const [ctx, setCtx] = useState(null as null | globalThis.CanvasRenderingContext2D);
    const [canDraw, setCanDraw] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [canvasWidth, setCanvasWidth] = useState(constants.DEFAULT_CANVAS_WIDTH);
    const [canvasHeight, setCanvasHeight] = useState(constants.DEFAULT_CANVAS_HEIGHT);
    const [canvasBackground, setCanvasBackground] = useState(constants.DEFAULT_CANVAS_BACKGROUND);
    const [penColor, setPenColor] = useState(constants.DEFAULT_PEN_COLOR);
    const [lineWidth, setLineWidth] = useState(constants.DEFAULT_LINE_WIDTH);
    const [filename, setFilename] = useState(constants.DEFAULT_FILENAME);
    const [board, updateBoard] = useState(constants.DEFAULT_BOARD);

    const clearCanvas = (): void => {
        if (ctx) {
            ctx?.clearRect(0, 0, Number(canvasWidth), Number(canvasHeight));
            setIsTouched(false);
        }
    };

    const saveChangesToBoard = (toUpdate: Partial<Board>): void => {
        const _board: Board = Object.assign({}, board, {
            ...toUpdate,
        });
        updateBoard({
            ...board,
            ...toUpdate,
        });
        dispatch({
            type: actions.UPDATE_ACTIVE_BOARD,
            payload: _board,
        });
    };

    useEffect(() => {
        dispatch({
            type: actions.UPDATE_ACTIVE_BOARD,
            payload: board,
        });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const getPositionX = (e: globalThis.MouseEvent | globalThis.TouchEvent): number => {
            let touchEvent;
            let mouseEvent;
            if (e.type === 'touchmove') {
                touchEvent = e as globalThis.TouchEvent;
            } else if (e.type === 'mousemove') {
                mouseEvent = e as globalThis.MouseEvent;
            }
    
            const value = (touchEvent)
                ? touchEvent.touches[0].clientX
                : (mouseEvent)
                    ? mouseEvent.clientX
                    : 0;
            return (canvas)
                ? value - canvas.offsetLeft
                : value;
        };
    
        const getPositionY = (e: globalThis.MouseEvent | globalThis.TouchEvent): number => {
            let touchEvent;
            let mouseEvent;
            if (e.type === 'touchmove') {
                touchEvent = e as globalThis.TouchEvent;
            } else if (e.type === 'mousemove') {
                mouseEvent = e as globalThis.MouseEvent;
            }
            const value = (touchEvent)
                ? touchEvent.touches[0].clientY
                : (mouseEvent)
                    ? mouseEvent.clientY
                    : 0;
            return (canvas)
                ? value - canvas.offsetTop
                : value;
        };
    
        const handleMouseDown = (e: globalThis.MouseEvent | globalThis.TouchEvent): void => {
            if (ctx) {
                setCanDraw(true);
                const posX = getPositionX(e);
                const posY = getPositionY(e);
                ctx.moveTo(posX, posY);
                ctx.beginPath();
                setIsTouched(true);
            }
        };
    
        const handleMouseMove = (e: globalThis.MouseEvent | globalThis.TouchEvent): void => {
            if (canvas && ctx) {
                const posX = getPositionX(e);
                const posY = getPositionY(e);
                const mouseEvent = e.type === 'mousemove'
                    ? e as globalThis.MouseEvent
                    : null;
                if (canDraw) {
                    if (mouseEvent && mouseEvent.buttons !== LEFT_MOUSE_BUTTON) {
                        return;
                    }
                    setIsTouched(true);
                    ctx.lineTo(posX, posY);
                    ctx.stroke();
                }
            }
        };
    
        const handleMouseUp = (): void => {
            setCanDraw(false);
        };
    
        const registerListeners = (): void => {
            if (canvas) {
                canvas.addEventListener('mousedown', (event) => {
                    handleMouseDown(event);
                });
                canvas.addEventListener('touchstart', (event) => {
                    handleMouseDown(event);
                });
    
                canvas.addEventListener('mousemove', (event) => {
                    handleMouseMove(event);
                });
                canvas.addEventListener('touchmove', (event) => {
                    handleMouseMove(event);
                });
    
                canvas.addEventListener('mouseup', () => {
                    handleMouseUp();
                });
                canvas.addEventListener('touchend', () => {
                    handleMouseUp();
                });
            }
        };

        registerListeners();
    });

    useEffect(() => {

        const initRenderingContext = (context: CanvasRenderingContext2D): void => {
            context.lineWidth = lineWidth;
            context.strokeStyle = penColor;
            setCtx(context);
        };

        if (canvas) {
            if (!ctx) {
                const canvasContext = canvas.getContext('2d');
                if (canvasContext) {
                    initRenderingContext(canvasContext);
                }
            }
        }

    }, [canvas, lineWidth, penColor, ctx]);

    return (
        <div>
            {/* options */}
            <div className={styles.options}>
                <div className="flex flex-row justify-end items-center">
                    <Item
                        style={{
                            ...formItemStyles,
                            marginRight: 'auto',
                        }}
                    >
                        <Search
                            defaultValue={filename}
                            onSearch={(value): void => {
                                showNotification('success', messages.SAVE_SUCCESS);
                                setFilename(value);
                                saveChangesToBoard({
                                    title: value,
                                });
                            }}
                            enterButton={
                                <Button type="primary" icon={<CheckOutlined />} />
                            }
                        />
                    </Item>
                    <Item
                        label="Pen size"
                        style={formItemStyles}
                    >
                        <InputNumber
                            value={lineWidth}
                            min={1}
                            max={20}
                            size="small"
                            onChange={(e): void => {
                                setLineWidth(e as number);
                            }}
                            style={inputStyles}
                        />
                    </Item>
                    <Divider type="vertical" />
                    <Popover
                        title="Canvas background"
                        content={
                            <BlockPicker {...pickerOpts}
                                styles={pickerStyles}
                                color={canvasBackground}
                                onChangeComplete={(c: any): void => {
                                    setCanvasBackground(c.hex);
                                }}
                            />
                        }
                    >
                        <div
                            className={styles.canvasColor}
                            style={{
                                background: canvasBackground,
                            }}
                        />
                    </Popover>
                    <Divider type="vertical" />
                    <Popover
                        title="Pen colour"
                        content={
                            <BlockPicker {...pickerOpts}
                                styles={pickerStyles}
                                color={penColor}
                                onChangeComplete={(c: any): void => {
                                    setPenColor(c.hex);
                                }}
                            />
                        }
                    >
                        <div
                            className={styles.penColor}
                            style={{
                                background: penColor,
                            }}
                        />
                    </Popover>
                    <Divider type="vertical" />
                    <Item
                        label="W:"
                        style={formItemStyles}
                    >
                        <Input
                            size="small"
                            value={canvasWidth}
                            onChange={(e): void => {
                                if (!isTouched) {
                                    setCanvasWidth(e.target.value);
                                    if (board) {
                                        saveChangesToBoard({
                                            dimensions: {
                                                ...board.dimensions,
                                                width: e.target.value,
                                            },
                                        });
                                    }
                                } else {
                                    showNotification('warning', messages.CANVAS_NOT_EMPTY);
                                }
                            }}
                            style={inputStyles}
                        />
                    </Item>
                    <Divider type="vertical" />
                    <Item
                        label="H:"
                        style={formItemStyles}
                    >
                        <Input
                            size="small"
                            value={canvasHeight}
                            onChange={(e): void => {
                                if (!isTouched) {
                                    setCanvasHeight(e.target.value);
                                    if (board) {
                                        saveChangesToBoard({
                                            dimensions: {
                                                ...board.dimensions,
                                                height: e.target.value,
                                            },
                                        });
                                    }
                                } else {
                                    showNotification('warning', messages.CANVAS_NOT_EMPTY);
                                }
                            }}
                            style={inputStyles}
                        />
                    </Item>
                    <Divider type="vertical" />
                    <Tooltip
                        title="Clear Canvas"
                        mouseEnterDelay={0}
                        placement="bottomLeft"
                    >
                        <Button
                            type="danger"
                            onClick={clearCanvas}
                            icon={<DeleteOutlined />}
                        />
                    </Tooltip>
                </div>
            </div>

            {/* This is the canvas */}
            <div id={styles.container}>
                <canvas
                    style={{
                        background: canvasBackground,
                        border: '1px solid rgba(0,0,0,0.08)',
                        margin: '0 auto',
                    }}
                    width={canvasWidth}
                    height={canvasHeight}
                    ref={setCanvas}
                >

                </canvas>
            </div>
        </div>
    );
};

export default connect()(Canvas);
