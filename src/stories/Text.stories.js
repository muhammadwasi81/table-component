import Text from '../components/Text';

export const CustomText = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Text
          style={{ color: 'red', fontSize: '20px' }}
          children="lorem ispum dolor smit emit"
        />
      </div>
    </>
  );
};

export default {
  title: 'Text',
  component: Text,
};
