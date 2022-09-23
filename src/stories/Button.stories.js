import CustomBtn from '../components/Button';

export const BtnLg = () => {
  return (
    <CustomBtn
      style={{
        width: '100%',
        color: '#000',
        background: '#f0c040',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
      }}
      children="click me"
      onClick={() => alert('clicked')}
    />
  );
};

export const BtnMd = () => {
  return (
    <CustomBtn
      style={{
        width: '50%',
        color: '#000',
        background: '#f0c040',
        padding: '20px',
        border: 'none',
        borderRadius: '5px',
      }}
      children="click me"
      onClick={() => alert('clicked')}
    />
  );
};

export const BtnSm = () => {
  return (
    <CustomBtn
      style={{
        width: '30%',
        color: '#000',
        background: '#f0c040',
        padding: '20px 10px',
        border: 'none',
        borderRadius: '5px',
      }}
      children="click me"
      onClick={() => alert('clicked')}
    />
  );
};

export default {
  title: 'Button',
  component: CustomBtn,
};
