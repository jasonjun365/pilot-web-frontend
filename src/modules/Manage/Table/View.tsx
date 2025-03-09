import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';
import Options from './Options';
import DeleteIcon from '@/resource/file/svg/special/Delete';
import SortIcon from '@/resource/file/svg/special/Sort';
import NavLiveIcon from '@/resource/file/svg/menu/list/Profile';
import { secondToHMS, numberFormat } from '@/libs/utils/index';
import EmojiTrans from '@/components/UI/EmojiTrans';
import ImageView from '@/components/UI/Photo/ImageView';
import PagesTable from '@/components/UI/List/Table';
import ViewStylePropTypes from '@/libs/types/ViewStyle';
import ColumnTypes from '@/components/UI/List/Table/Interface/Column';
import DefaultPropTypes from '@/components/UI/List/Table/Interface/PagesTable';
import parse from 'html-react-parser';
import {LiveCache} from '@/libs/utils/cache/LiveCache';

interface PropTypes extends DefaultPropTypes, ViewStylePropTypes {
  handleChangeSortGetData: () => void
  handleDeleteFormShow: () => void
}

const View: React.FC<PropTypes> = ({ handleChangeSortGetData, handleDeleteFormShow, getMixinStyle, ...props }) => {
  const { t } = useTranslation();

  const columns: ColumnTypes[] = [{
    name: '_id',
    align: 'left',
    minWidth: 450,
    label: t('label.livestream'),
    render: (_v, record) => {
      let _time = '';
      if (record?.duration) {
        _time = secondToHMS(record.duration / 1000);
      } else if (record?.startAt && LiveCache.endTime > 0) {
        _time = secondToHMS((LiveCache.endTime - record.startAt) / 1000);
      }

      return (
        <div className={getMixinStyle('livestream')}>
          <div className={getMixinStyle('left')}>
            <ImageView src={record.imgs[0]} imgClassName={getMixinStyle('img')}/>
            {record.isLive && <div className={getMixinStyle('live', ['tag'])}><NavLiveIcon width={16} height={16} color="var(--static-white)" /><span>{t('label.liveNow')}</span></div>}
            {!record.isLive && <div className={getMixinStyle('time', ['tag'])}><span>{_time}</span></div>}
          </div>
          <div className={getMixinStyle('right')}>
            <div className={getMixinStyle('title')}><EmojiTrans text={record.ttl ? parse(record.ttl) : record.ttl} /></div>
            <div className={getMixinStyle('description')}><EmojiTrans text={record.dsc ? parse(record.dsc) : record.dsc} /></div>
          </div>
          <div className={getMixinStyle('options')}>
            <Options record={record} />
          </div>
        </div>
      );
    }
  }, {
    name: 'isLive',
    align: 'left',
    width: 230,
    label: t('label.status'),
    render: (v) => v?.constructor === Boolean ? t('label.' + (v ? 'liveNow' : 'published')) : '-'
  }, {
    name: 'startAt',
    align: 'left',
    width: 230,
    label: (
      <div className={getMixinStyle('date', [props.searchForm.sort])}>
        {t('label.date')}
        <SortIcon onClick={handleChangeSortGetData} />
      </div>
    ),
    render: (v) => v ? new Date(v).toDateString().split(' ').slice(1).join(', ') : '-'
  }, {
    name: 'viewsCount',
    align: 'left',
    width: 230,
    label: t('label.views'),
    render: (v) => v >= 0 ? v > 1000 ? (
      <Tooltip title={v} placement="bottom">
        <span>{numberFormat(v)}</span>
      </Tooltip>
    ) : v : '-'
  }, {
    name: 'cm',
    align: 'left',
    width: 230,
    label: t('label.comments'),
    render: (v) => v >= 0 ? v > 1000 ? (
      <Tooltip title={v} placement="bottom">
        <span>{numberFormat(v)}</span>
      </Tooltip>
    ) : v : '-'
  }];

  return <PagesTable
    {...props}
    columns={columns}
    rowkey="_id"
    searchFormHeight="(84px + 84px)"
    selectProps={{
      key: '_id',
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
