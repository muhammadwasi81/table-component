import '../../index.css';

const CustomTable = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Registered Courses</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            <TableData data={data} />
          ) : (
            <tr>
              <td>No data available</td>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

function TableData({ data }) {
  return (
    <>
      {data.map((student) => (
        <>
          <tr>
            <td>{student.name}</td>
            <td>{student.course}</td>
          </tr>
        </>
      ))}
    </>
  );
}
export default CustomTable;
