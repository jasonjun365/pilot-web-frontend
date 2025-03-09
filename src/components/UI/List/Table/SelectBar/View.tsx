import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';
import {ColumnTypes} from '@/components/UI/List/Table/Interface';
import CheckboxIcon from '@/resource/file/svg/special/Checkbox';
import ViewStylePropTypes from '@/libs/types/ViewStyle';


interface PropTypes extends ViewStylePropTypes { // states
  columns: ColumnTypes[]
  data: any[]
  selectProps: any
  height: string
}

const PagesTable: React.FC<PropTypes> = ({ columns, data, height, selectProps, getMixinStyle }) => {
  const { t } = useTranslation();

  const handleToolbarCheck = (isChecked?: boolean, record?: any) => {
    const { mode, value, setValue, key, disabledKey } = selectProps;
    if (!record) { // head
      const filterData = disabledKey ? data.filter((t: any) => !t[disabledKey]) : data;
      const keys = filterData.map((t: any) => String(t[key]));
      const pageAllChecked = keys.filter((t: any) => !value.includes(t)).length === data.filter((t: any) => !t[disabledKey]).length;
  
      if (pageAllChecked) {
        const newValue = keys.filter((t: any) => !value.includes(t));
        setValue({ mode, value: value.concat(newValue) });
      } else {
        setValue({ mode, value: value.filter((t: any) => !keys.includes(t)) });
      }
    } else { // body
      if (disabledKey && !record[disabledKey]) {
        if (isChecked) {
          setValue({ mode, value: value.filter((t: any) => t !== String(record[key])) });
        } else {
          setValue({ mode, value: value.concat([String(record[key])]) });
        }
      }
    }
  };
  
  const handleClearSelection = () => {
    const { mode, setValue } = selectProps;
    setValue({ mode, value: [] });
  };

  const { value, key, disabledKey } = selectProps;

  if (columns.findIndex(t => t.name === 'custom_checkbox') === -1)
    columns.unshift({
      name: 'custom_checkbox',
      align: 'center',
      width: 22,
      label: (
        Boolean(data.length) && (
          <Tooltip title={t('btn.selectAll')} placement="bottom">
            <div>
              <CheckboxIcon
                disabled={disabledKey ? data.every(t => t[disabledKey]) : false}
                checked={data.every(t => value.includes(t[key]))}
                indeterminate={data.some(t => value.includes(t[key])) && !data.every(t => value.includes(t[key]))}
                onClick={handleToolbarCheck}
              />
            </div>
          </Tooltip>
        )
      ),
      render: (_v, record) => {
        return (
          <CheckboxIcon
            disabled={disabledKey && record[disabledKey]}
            checked={value.includes(String(record[key]))}
            onClick={() => handleToolbarCheck(value.includes(String(record[key])), record)}
          />
        );
      }
    });
  
  if (!selectProps.value.length) {
    return <div />;
  }

  return (
    <div style={{ height }} className={getMixinStyle('layout')}>
      {selectProps.value.length} {t('status.selected')} <b onClick={handleClearSelection}>{t('btn.clearSelection')}</b> <span /> {selectProps.icon}
    </div>
  );
};

export default PagesTable;