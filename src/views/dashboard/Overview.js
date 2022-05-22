import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// core component
import CardComponent from "../../components/Cards/CardComponent";
import { BarChart } from "../../components/Charts/Charts";

// css and icons
import {
  BsArrowDownRightSquare,
  BsArrowUpRightSquare,
  HiOutlineChevronDoubleRight,
  CgArrowsExchange,
  AiOutlinePlus
} from "../../imports/icons";
import "../../assets/css/overview.css";
import { PrimaryButton } from "../../components/Buttons/Buttons";

const Overview = props => {
  const { setView } = props;
  useEffect(() => {
    setView("overview");
  }, []);
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
        <section className="transactions">
          <CardComponent className="add-transactions overview-card">
            <span className="icon">
              <CgArrowsExchange />
            </span>
            <span className="text">Add transaction</span>
            <PrimaryButton block className="add-btn">
              <AiOutlinePlus />
            </PrimaryButton>
          </CardComponent>
          <CardComponent className="transaction-list overview-card">
            <header className="card-header">
              <h3>Transactions</h3>
              <Link to="transactions">view all</Link>
            </header>
          </CardComponent>
        </section>
        <section className="analytics-charts">
          <CardComponent className="overview-card">
            <header className="card-header">
              <h3>Analytics</h3>
              {/* <Link to="transactions">view all</Link> */}
            </header>
          </CardComponent>
          <CardComponent className="overview-card">
            <header className="card-header">
              <h3>Charts</h3>
              {/* <Link to="transactions">view all</Link> */}
            </header>
            <BarChart />
          </CardComponent>
        </section>
      </div>
    </motion.section>
  );
};

export default Overview;
