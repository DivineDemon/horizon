import Rightbar from "@/components/Rightbar";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Mushood",
    lastName: "Hanif",
    email: "supame123@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
      <Rightbar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;
