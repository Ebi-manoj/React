export const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>This is a Basic Card</p>
      <p>Data:</p>
    </div>
  );
};

export const Hoc = Cardd => {
  return props => {
    return (
      <div>
        <Cardd data={props} />
        <p>This is Hoc</p>
      </div>
    );
  };
};
