
interface ChartTopProps {
  status?: any[];
}
const ChartTop: React.FC<ChartTopProps> = ({ status }) => {
  return (
    <div className="row mt-3 p-2">
      {status?.map((stat, index) => {
        return (
          <div key={index} className="col-4">
            <div
              className="row shadow p-3"
              style={{ width: 420, borderRadius: 20 }}
            >
              <div className="col-6">
                <h3>{stat.views}k</h3>
                <p>{stat.title}</p>
              </div>
              <div className="col-6" style={{ textAlign: "end" }}>
                <img
                  className="col-6 rounded-circle"
                  src={stat.images}
                  alt="avatar"
                  style={{ width: 80, height: 80, objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ChartTop;
