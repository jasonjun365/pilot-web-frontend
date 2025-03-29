import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';
import PagesTable from '@/components/UI/List/Table';
import {ColumnTypes, TableTypes as DefaultPropTypes} from '@/components/UI/List/Table/Interface';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import DeleteIcon from '@/resource/file/svg/special/Delete';
import SmallButton from '@/components/UI/Button/SmallButton';
import {IStudent} from '@/libs/types/entities';

interface PropTypes extends DefaultPropTypes, ViewStylePropTypes {
  containerId: string
  handleDeleteFormShow: () => void
  handleEditChildClick: (data: IStudent) => void
  handleReRegistrationClick: (studentId: number) => void
}

const View: React.FC<PropTypes> = ({
  handleDeleteFormShow,
  handleEditChildClick,
  handleReRegistrationClick,
  getMixinStyle, ...props
}) => {
  const { t } = useTranslation();

  const columns: ColumnTypes[] = [
    {
      name: 'id',
      align: 'left',
      minWidth: 120,
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
      name: 'name',
      align: 'left',
      width: 260,
      label: 'Name',
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
      name: 'email',
      align: 'left',
      width: 260,
      label: 'Email',
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
      name: 'address',
      align: 'left',
      width: 260,
      label: 'Address',
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
      name: 'parentName',
      align: 'left',
      width: 260,
      label: 'Parent',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              <div className={getMixinStyle('title')}>{val}</div>
              <div className={getMixinStyle('title')}>{record.parentEmail}</div>
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
              <SmallButton label="Edit" onClick={() => {handleEditChildClick(record);}}/>
              <SmallButton label="Re-registration" onClick={() => {handleReRegistrationClick(record.id);}}/>
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
            <DeleteIcon onClick={handleDeleteFormShow} />
          </div>
        </Tooltip>
      ),
    }}
  />;
};

export default View;
