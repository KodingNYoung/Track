import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar } from "antd";
import moment from "moment";
import { getFormattedDate } from "utils";

// core component
import CardComponent from "components/CardComponent";
import { BarChart, DoughnutChart } from "components/Charts";
import { PrimaryButton } from "components/Buttons";
import { CustomizedSelectField, DateField } from "components/InputFields";
import { allBarChartData } from "data";

// css and icons
import {
  BsArrowDownRightSquare,
  BsArrowUpRightSquare,
  HiOutlineChevronDoubleRight,
  CgArrowsExchange,
  AiOutlinePlus
} from "imports/icons";
import "assets/css/overview.css";

const Overview = props => {
  const [period, setPeriod] = useState({
    chart: "week",
    analytics: "week"
  });
  const [barChartData, setBarChartData] = useState({});
  const [barChartFilters, setBarChartFilters] = useState({
    period: "week",
    date: ""
  });

  // functions
  const handlePeriodChange = (name, value) => {
    setPeriod({ ...period, [name]: value });
  };
  const handleBarChartPeriodChange = value => {
    setBarChartFilters({ period: value, date: "" });
  };
  const handleBarChartDateFilter = data => {
    if (moment(data) <= moment()) {
      return setBarChartFilters({ ...barChartFilters, date: data });
    } else {
      console.log("you can't choose a future date");
    }
  };
  const formatChartDate = filter => {
    let { date, period } = filter;

    // get date format
    const format = period === "week" ? "YYYY-wo" : "YYYY";
    date = getFormattedDate(date, format);

    // get the data from the db
    const data = allBarChartData?.[period];
    const labels = data?.labels;
    const datasets = data?.data?.[date];
    setBarChartData({ labels, datasets });
  };

  useEffect(() => {
    formatChartDate(barChartFilters);
  }, [barChartFilters]);

  return (
    <motion.section
      className="overview"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="overview-header-cards">
        <CardComponent className="overview-header-card overview-card">
          <h3 className="card-header">total income</h3>
          <div className="card-body">
            <div className="value text-success">
              <span>$400,655.67</span> <BsArrowUpRightSquare />
            </div>
            <small className="statistic">
              <span className="text-success">20%</span> increase compared to
              last week
            </small>
          </div>
          <footer className="card-footer">
            <Link to="transactions">
              <span>See Details</span>
              <HiOutlineChevronDoubleRight />
            </Link>
          </footer>
        </CardComponent>
        <CardComponent className="overview-header-card overview-card overview-card">
          <h3 className="card-header">total expense</h3>
          <div className="card-body">
            <div className="value text-error">
              <span>$400,655.67</span> <BsArrowDownRightSquare />
            </div>
            <small className="statistic">
              <span className="text-error">13%</span> decrease compared to last
              week
            </small>
          </div>
          <footer className="card-footer">
            <Link to="transactions">
              <span>See Details</span>
              <HiOutlineChevronDoubleRight />
            </Link>
          </footer>
        </CardComponent>
      </div>
      <div className="overview-main-content">
        <section className="transactions-section">
          <CardComponent className="add-transactions overview-card">
            <span className="icon">
              <CgArrowsExchange />
            </span>
            <span className="text">Add transaction</span>
            <PrimaryButton block className="add-btn">
              <AiOutlinePlus />
            </PrimaryButton>
          </CardComponent>
          <CardComponent className="transactions overview-card">
            <header className="card-header">
              <h3>Transactions</h3>
              <Link to="transactions">view all</Link>
            </header>
            <div className="transaction-list-container">
              <ul className="transaction-list">
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type debit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type credit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type debit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type debit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type credit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type debit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type credit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type debit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type debit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
                <li className="transaction">
                  <Avatar
                    style={{
                      backgroundColor: "#00f",
                      verticalAlign: "middle"
                    }}
                    size="large"
                  >
                    F
                  </Avatar>
                  <div className="transaction-details">
                    <div className="transaction-meta">
                      <h4 className="name">Rice</h4>
                      <span className="transaction-type credit">Food</span>
                    </div>
                    <span className="price">$20</span>
                  </div>
                </li>
              </ul>
            </div>
          </CardComponent>
        </section>
        <section className="analytics-charts">
          <CardComponent className="overview-card">
            <header className="card-header">
              <h3>Analytics</h3>
              <CustomizedSelectField
                label="Period"
                options={[
                  { value: "week", name: "Weekly" },
                  { value: "month", name: "Monthly" },
                  { value: "year", name: "Yearly" }
                ]}
                value={period?.analytics}
                handleChange={value => handlePeriodChange("analytics", value)}
              />
            </header>
            <div className="charts">
              <div className="income-chart chart">
                <DoughnutChart />
              </div>
              <div className="divider" />
              <div className="income-chart chart">
                <DoughnutChart />
              </div>
            </div>
          </CardComponent>
          <CardComponent className="overview-card bar-chart-card">
            <header className="card-header">
              <h3>Charts</h3>
              <span className="card-header-action">
                <DateField
                  handleChange={handleBarChartDateFilter}
                  className="date-selector"
                  type={barChartFilters.period}
                  value={
                    barChartFilters?.date
                      ? moment(barChartFilters?.date)
                      : moment()
                  }
                />
                <CustomizedSelectField
                  label="Period"
                  options={[
                    { value: "week", name: "Weekly" },
                    { value: "year", name: "Yearly" }
                  ]}
                  handleChange={handleBarChartPeriodChange}
                  value={barChartFilters?.period}
                />
              </span>
            </header>
            <div className="chart">
              <BarChart
                labels={barChartData?.labels}
                datasets={[
                  {
                    label: "income",
                    backgroundColor: "#00b528",
                    data: barChartData?.datasets?.income
                  },
                  {
                    label: "expenses",
                    backgroundColor: "#FC0404",
                    data: barChartData?.datasets?.expenses
                  }
                ]}
              />
            </div>
          </CardComponent>
        </section>
      </div>
    </motion.section>
  );
};

export default Overview;
