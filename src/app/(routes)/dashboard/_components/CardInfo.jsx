import React, { useEffect, useState } from "react";
import {
    PiggyBank,
    ReceiptText,
    Wallet,
    Sparkles,
    CircleDollarSign,
  } from "lucide-react";

function CardInfo({ budgetList }) {
    const [totalBudget, setTotalBudget] = useState(0);
    const [totalSpend, setTotalSpend] = useState(0);


    useEffect(() => {
        budgetList&&CalculateCardInfo();
      }, [budgetList]);
    
      const CalculateCardInfo = () => {
        console.log(budgetList);
        let totalBudget_ = 0;
        let totalSpend_ = 0;
    
        budgetList.forEach((element) => {
          totalBudget_ = totalBudget_ + Number(element.amount);
          totalSpend_ = totalSpend_ + element.totalSpend;
        });
    
        setTotalBudget(totalBudget_);
        setTotalSpend(totalSpend_);
      };


    return (
        <div>
        {budgetList?.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Budget</h2>
                <h2 className="font-bold text-2xl">
                 ${totalBudget}
                </h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Spend</h2>
                <h2 className="font-bold text-2xl">
                  ${totalSpend}
                </h2>
              </div>
              <ReceiptText className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">No. Of Budget</h2>
                <h2 className="font-bold text-2xl">{budgetList?.length}</h2>
              </div>
              <Wallet className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
        </div>
        </div>
    ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
      </div>
    );
}
    
export default CardInfo;