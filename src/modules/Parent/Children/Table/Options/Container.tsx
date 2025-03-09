
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Actions from '@/store/actions';

const {
  actions: deleteFormActions
} = Actions.parent.children.deleteForm;

interface PropTypes {
  Index: React.FC<any>
  record: any
}

const Special: React.FC<PropTypes> = ({ Index, record }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const states = {
    postId: record._id,
    disabledRemove: record.disabledRemove,
  };

  const methods = {
    // handleChannelFormShow: () => {
    //   const params = {
    //     ttl: record.ttl,
    //     dsc: record.dsc,
    //     img: record.imgs[0],
    //     postId: record._id,
    //   };
    //
    //   dispatch(channelLiveFormActions.reset());
    //   dispatch(channelLiveFormActions.setData(params));
    //   dispatch(channelLiveFormActions.show(t('title.editLivestream')));
    // },
    handleDeleteFormShow: () => {
      const params = {
        postIds: [record._id],
      };

      dispatch(deleteFormActions.reset());
      dispatch(deleteFormActions.setData(params));
      dispatch(deleteFormActions.show(t('btn.delete')));
    },
  };

  return (
    <Index
      {...states}
      {...methods}
    />
  );
};

export default Special;