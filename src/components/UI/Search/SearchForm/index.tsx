import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Form from './Form';

interface PropTypes { // states
  initialData: any
  data: any
  errors: any
  loading: boolean
  children: React.ReactNode
  thunkNames: string[]
}

interface PropTypes { // methods
  reset: (v?: any, n?: any) => void
  hookSubmit: (v?: any, n?: any) => any
  setValue: (v: any, n: any) => any
  trigger: (v?: any) => any
  handleGetData: (v: any) => void
}

const SearchForm: React.FC<PropTypes> = ({ errors, trigger, ...props }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    props.reset();
  }, []);

  useEffect(() => {
    Object.entries(props.data).forEach((it: any) => {
      props.setValue(it[0], it[1]);
    });
  }, [props.data]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      trigger();
    }
  }, [i18n.language]);

  return (
    <Form {...props} />
  );
};

export default SearchForm;
