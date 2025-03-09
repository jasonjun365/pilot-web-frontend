import React from 'react';
import { useTranslation } from 'react-i18next';
import PagesTable from '@/components/UI/List/Table';
import {ColumnTypes, TableTypes as DefaultPropTypes} from '@/components/UI/List/Table/Interface';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import SmallButton from '@/components/UI/Button/SmallButton';
import {Tooltip} from '@mui/material';
import DeleteIcon from '@/resource/file/svg/special/Delete';

interface PropTypes extends DefaultPropTypes, ViewStylePropTypes {
}

const View: React.FC<PropTypes> = ({
  getMixinStyle, ...props
}) => {
  const { t } = useTranslation();

  const columns: ColumnTypes[] = [
    {
      name: 'id',
      align: 'left',
      minWidth: 100,
      label: 'ID', // t('label.livestream')
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              <div className={getMixinStyle('title')}>{val}</div>
            </div>
          </div>
        );
      }
    },
    {
      name: 'parent_id',
      align: 'left',
      width: 200,
      label: 'Parent', // t('label.status')
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              <div className={getMixinStyle('title')}>{record.parent?.username}</div>
            </div>
          </div>
        );
      }
    },
    {
      name: 'student_id',
      align: 'left',
      width: 200,
      label: 'Student',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              <div className={getMixinStyle('title')}>{record.student?.name}</div>
            </div>
          </div>
        );
      }
    },
    {
      name: 'program_id',
      align: 'left',
      width: 260,
      label: 'Program',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              <div className={getMixinStyle('title')}>{record.program?.name}</div>
            </div>
          </div>
        );
      }
    },
    {
      name: 'activities',
      align: 'left',
      width: 260,
      label: 'Activities',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              {record.activities.map((item: any) => (
                <div key={item.id} className={getMixinStyle('title')}>{item?.name}</div>
              ))}
            </div>
          </div>
        );
      }
    },
    {
      name: 'tuition',
      align: 'left',
      width: 260,
      label: 'Fee',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              <div className={getMixinStyle('title')}>Tuition: ${record.tuition}</div>
              <div className={getMixinStyle('title')}>Tech fee: ${record.tech_fee}</div>
              <div className={getMixinStyle('title')}>Activities fee: ${record.activities_fee}</div>
              <div className={getMixinStyle('title')}>Discount: -${record.tuition_discount}</div>
              <div className={getMixinStyle('title')}>Total: ${record.total_fee}</div>
            </div>
          </div>
        );
      }
    },
    {
      name: 'status',
      align: 'left',
      width: 120,
      label: 'Fee',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              <div className={getMixinStyle('title')}>{record.status}</div>
            </div>
          </div>
        );
      }
    },
    {
      name: '',
      align: 'left',
      width: 360,
      label: 'Actions',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              {record.status === 'Progress' && (
                <SmallButton label="Pay" onClick={() => {}}/>
              )}
              {record.status === 'Done' && (
                <SmallButton label="Receipt print" onClick={() => {}}/>
              )}
            </div>
          </div>
        );
      }
    }
  ];

  return <PagesTable
    {...props}
    columns={columns}
    rowkey="id"
    searchFormHeight="(84px + 84px)"
    selectProps={{
      key: 'id',
      disabledKey: 'disabledRemove',
      mode: props.selects.now,
      value: props.selects.data[props.selects.now],
      setValue: props.handleSetSelectValue,
      icon: (
        <Tooltip title={t('btn.delete')} placement="bottom">
          <div>
            <DeleteIcon onClick={() => {}} />
          </div>
        </Tooltip>
      ),
    }}
  />;
};

export default View;
