import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';
import PagesTable from '@/components/UI/List/Table';
import {ColumnTypes, TableTypes as DefaultPropTypes} from '@/components/UI/List/Table/Interface';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import DeleteIcon from '@/resource/file/svg/special/Delete';
import SmallButton from '@/components/UI/Button/SmallButton';
import {IUser} from '@/libs/types/entities';

interface PropTypes extends DefaultPropTypes, ViewStylePropTypes {
  handleDeleteFormShow: () => void
  handleEditChildClick: (data: IUser) => void
}

const View: React.FC<PropTypes> = ({
  handleDeleteFormShow,
  handleEditChildClick,
  getMixinStyle, ...props
}) => {
  const { t } = useTranslation();

  const columns: ColumnTypes[] = [
    {
      name: 'userId',
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
      name: 'username',
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
      name: 'status',
      align: 'left',
      width: 260,
      label: 'Address',
      render: (val, record) => {
        return (
          <div className={getMixinStyle('column')}>
            <div className={getMixinStyle('right')}>
              {val === 1 && (
                <div className={getMixinStyle('title')}>Enable</div>
              )}
              {val === 0 && (
                <div className={getMixinStyle('title')}>Disable</div>
              )}
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
