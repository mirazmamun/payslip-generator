import _ from 'lodash';
//define the super rate as it is treated as constant and not configurable by consumer
//super rate is in decimal
const superRate = Number(0.09);
export default class PaySlip {
    /**
     * @constructor
     * @param {Number} salaryPerAnnum 
     * @throws TypeError
     */
    constructor(salaryPerAnnum = Number(0.0)) {
        if (_.isNumber(salaryPerAnnum)) {
            this.salaryPerAnnum = salaryPerAnnum;
            this.grossIncome = Math.floor(salaryPerAnnum / 12);
            this.incomeTax = Number(0.0);
            this.netIncome = Number(0.0);
            this.super = Number(0.0);
        } else {
            throw new TypeError(`Must pass in number as constructor argument`);
        }
    }
    /**
     * Initiate the calculation of the components based on salary tier
     */
    calculate() {
        if (_.isNumber(this.salaryPerAnnum)) {
            //implement the steps
            if (this.salaryPerAnnum >= Number(180001)) {
                this.calculateIncomeComponents({ rate: Number(0.45), threshold: Number(180000), offset: Number(54232) });
            } else if (this.salaryPerAnnum >= Number(87001)) {
                this.calculateIncomeComponents({ rate: Number(0.37), threshold: Number(87000), offset: Number(19822) });
            } else if (this.salaryPerAnnum > Number(37001)) {
                this.calculateIncomeComponents({ rate: Number(0.325), threshold: Number(37000), offset: Number(3572) });

            } else if (this.salaryPerAnnum > Number(18201)) {
                this.calculateIncomeComponents({ rate: Number(0.19), threshold: Number(18200), offset: Number(0.0) });
            } else {
                //NOOP, this will apply all the initial values
            }
        }
    }
    /**
     * Calculate all the parts of the salary like incomeTax, netIncome, super
     * @param {Object} param0 
     */
    calculateIncomeComponents({ rate = 0.0, threshold = 0.0, offset = 0.0 }) {
        if (_.isNumber(rate) && _.isNumber(threshold) && _.isNumber(offset)) {
            this.incomeTax = Math.ceil((Number(offset) + Number((this.salaryPerAnnum - threshold) * rate)) / 12);
            this.netIncome = this.grossIncome - this.incomeTax;
            this.super = Math.floor(this.grossIncome * superRate);
        }
    }
}