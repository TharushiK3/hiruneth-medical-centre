
type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
};

function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <section className="dashboard-card">
      <h3>{title}</h3>
      <p className="dashboard-value">{value}</p>
      <p className="dashboard-description">
        {description}
      </p>
    </section>
  );
}

export default DashboardCard;
