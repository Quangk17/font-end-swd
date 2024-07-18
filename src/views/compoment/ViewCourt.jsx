import React, { useState, useEffect } from 'react';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Slot ID',
        dataIndex: 'slotID',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const Row = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: props['data-row-key'],
    });
    const style = {
        ...props.style,
        transform: CSS.Translate.toString(transform),
        transition,
        cursor: 'move',
        ...(isDragging
            ? {
                position: 'relative',
                zIndex: 9999,
            }
            : {}),
    };
    return <tr {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};

const ViewCourt = ({ court }) => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        if (court) {
            setDataSource([court]);
        }
    }, [court]);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 1,
            },
        })
    );

    const onDragEnd = ({ active, over }) => {
        if (active.id !== over?.id) {
            setDataSource((prev) => {
                const activeIndex = prev.findIndex((i) => i.key === active.id);
                const overIndex = prev.findIndex((i) => i.key === over?.id);
                return arrayMove(prev, activeIndex, overIndex);
            });
        }
    };

    return (
        <DndContext sensors={sensors} modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
            <SortableContext
                items={dataSource.map((i) => i.key)}
                strategy={verticalListSortingStrategy}
            >
                <Table
                    components={{
                        body: {
                            row: Row,
                        },
                    }}
                    rowKey="key"
                    columns={columns}
                    dataSource={dataSource}
                />
            </SortableContext>
        </DndContext>
    );
};

export default ViewCourt;
