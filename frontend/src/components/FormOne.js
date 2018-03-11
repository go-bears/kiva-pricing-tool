// @flow
import React, { Component, View, StyleSheet } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { Dropdown, StuffList, Button, TextField, APRRateDisplay } from './'
import { Grid, Jumbotron, PageHeader, Form, Bootstrap } from 'react-bootstrap'
import axios from 'axios'

import './../styles/app.scss'

class FormOne extends Component<void> {
  render() {
    return (
      <Jumbotron className="banner">
        <Grid>
          <PageHeader>User Information</PageHeader>
          <Form inline>
            <TextField
              id="First Name"
              hint="ex. John"
              typeVal="String"
              limit="100"
              ref="firstName"
            />
            <TextField
              id="Last Name"
              hint="ex. Smith"
              typeVal="String"
              limit="100"
              ref="lastName"
            />
          </Form>

          <PageHeader>Basic Loan Conditions</PageHeader>

          <Form inline>
            <Dropdown
              title="Amortization:"
              items={[
                { id: '1', value: 'Equal Principal Payments' },
                { id: '2', value: 'Equal Installments' },
                { id: '3', value: 'Single end-term principal payment' }
              ]}
              ref="repayment_type"
            />
            <Dropdown
              title="Interest:"
              items={[
                { id: '1', value: 'Multiple Installments' },
                { id: '2', value: 'Single End-Term Payments' }
              ]}
              ref="interest_payment_type"
            />
            <Dropdown
              title="Interest Calculation:"
              items={[
                { id: '1', value: 'Initial Amount' },
                { id: '2', value: 'Flat' },
                { id: '2', value: 'Declining Balance' }
              ]}
              ref="interest_calculation_type"
            />
          </Form>

          <br />
          <Form inline>
            <TextField
              id="Loan Amount"
              hint="ex. 5000"
              typeVal="float"
              limit="900000000"
              ref="loan_amount"
            />
            <TextField
              id="Number of Terms"
              hint="ex. 12"
              typeVal="int"
              limit="180"
              ref="installment"
            />
            <TextField
              id="Nominal Interest Rate"
              hint="ex. 12"
              typeVal="int"
              limit="100"
              ref="nominal_interest_rate"
            />
          </Form>

          <Form inline>
            <Dropdown
              title="Term Length:"
              items={[
                { id: '1', value: 'Per Day' },
                { id: '7', value: 'Per Week' },
                { id: '14', value: 'Per 2 Week Period' },
                { id: '15', value: 'Per 15 Day Period' },
                { id: '28', value: 'Per 4 Week Period' },
                { id: '30', value: 'Per Month' },
                { id: '90', value: 'Per Quarter' },
                { id: '180', value: 'Per Half Year' },
                { id: '365', value: 'Per Year' }
              ]}
              ref="installment_time_period"
            />
            <Dropdown
              title="Nominal Interest Rate:"
              items={[
                { id: '1', value: 'Per Day' },
                { id: '7', value: 'Per Week' },
                { id: '14', value: 'Per 2 Week Period' },
                { id: '15', value: 'Per 15 Day Period' },
                { id: '28', value: 'Per 4 Week Period' },
                { id: '30', value: 'Per Month' },
                { id: '90', value: 'Per Quarter' },
                { id: '180', value: 'Per Half Year' },
                { id: '365', value: 'Per Year' }
              ]}
              ref="interest_time_period"
            />
          </Form>

          <h2>
            <small> Grace or Prepay </small>
          </h2>
          <Form inline>
            <TextField
              id="Capital"
              hint="ex. x"
              typeVal="float"
              limit="180"
              ref="grace_period_principal"
            />
            <TextField
              id="Int Pmt"
              hint="ex. x"
              typeVal="float"
              limit="180"
              ref="grace_period_interest_pay"
            />
            <TextField
              id="Int Calc"
              hint="ex. x"
              typeVal="float"
              limit="180"
              ref="grace_period_interest_calculate"
            />
            <TextField
              id="Balloon"
              hint="ex. x"
              typeVal="float"
              limit="180"
              ref="grace_period_balloon"
            />
          </Form>

          <PageHeader>Fees and Taxes</PageHeader>

          <h2>
            <small> Fees </small>
          </h2>

          <Form inline>
            <TextField
              id="Fee%"
              hint="Upfront"
              typeVal="float"
              limit="180"
              ref="fee_percent_upfront"
            />
            <TextField
              id="Fee%"
              hint="Ongoing"
              typeVal="float"
              limit="180"
              ref="fee_percent_ongoing"
            />
            <TextField
              id="Fee (fixed amt)"
              hint="Upfront"
              typeVal="float"
              limit="100000000"
              ref="fee_fixed_upfront"
            />
            <TextField
              id="Fee (fixed amt)"
              hint="Ongoing"
              typeVal="float"
              limit="100000000"
              ref="fee_fixed_ongoing"
            />
          </Form>

          <h2>
            <small> Taxes </small>
          </h2>

          <Form inline>
            <TextField
              id="Value Added Tax % on Fees"
              typeVal="float"
              limit="100"
              ref="tax_percent_fees"
            />
            <TextField
              id="Value Added Tax % on Interest"
              typeVal="float"
              limit="100"
              ref="tax_percent_interest"
            />
          </Form>

          <PageHeader>Insurance</PageHeader>

          <Form inline>
            <TextField
              id="Insurance %"
              hint="Upfront"
              typeVal="float"
              limit="100"
              ref="insurance_percent_upfront"
            />
            <TextField
              id="Insurance %"
              hint="Ongoing"
              typeVal="float"
              limit="100"
              ref="insurance_percent_ongoing"
            />
            <TextField
              id="Insurance (fixed amt)"
              hint="Upfront"
              typeVal="float"
              limit="900000000"
              ref="insurance_fixed_upfront"
            />
            <TextField
              id="Insurance (fixed amt)"
              hint="Ongoing"
              typeVal="float"
              limit="900000000"
              ref="insurance_fixed_ongoing"
            />
          </Form>

          <PageHeader>Security Deposit</PageHeader>

          <Form inline>
            <TextField
              id="Security Deposit %"
              hint="Upfront"
              typeVal="float"
              limit="100"
              ref="security_deposit_percent_upfront"
            />
            <TextField
              id="Security Deposit %"
              hint="Ongoing"
              typeVal="float"
              limit="100"
              ref="security_deposit_percent_ongoing"
            />
            <TextField
              id="Security Deposit (fixed amt)"
              hint="Upfront"
              typeVal="float"
              limit="900000000"
              ref="security_deposit_fixed_upfront"
            />
            <TextField
              id="Security Deposit (fixed amt)"
              hint="Ongoing"
              typeVal="float"
              limit="900000000"
              ref="security_deposit_fixed_ongoing"
            />
            <TextField
              id="Interest Paid on Deposit"
              typeVal="float"
              limit="900000000"
              ref="interest_paid_on_deposit_percent"
            />
          </Form>

          <Button name="Back" url="" onClickHandler={() => {}} />
          <Button
            name="Next"
            url="output"
            onClickHandler={() => {
              axios
                .post('https://127.0.0.1:3453/calculateAPR', {
                  start_name: this.refs.firstName.value,
                  installment_time_period: this.refs.installment_time_period
                    .value,
                  repayment_type: this.refs.repayment_type.value,
                  interest_time_period: this.refs.interest_time_period.value,
                  interest_payment_type: this.refs.interest_payment_type.value,
                  interest_calculation_type: this.refs.interest_calculation_type
                    .value,
                  loan_amount: this.refs.loan_amount.value,
                  installment: this.refs.installment.value,
                  nominal_interest_rate: this.refs.nominal_interest_rate.value,
                  grace_period_principal: this.refs.grace_period_principal
                    .value,
                  grace_period_interest_pay: this.refs.grace_period_interest_pay
                    .value,
                  grace_period_interest_calculate: this.refs
                    .grace_period_interest_calculate.value,
                  grace_period_balloon: this.refs.grace_period_balloon.value,
                  fee_percent_upfront: this.refs.fee_percent_upfront.value,
                  fee_percent_ongoing: this.refs.fee_percent_ongoing.value,
                  fee_fixed_upfront: this.refs.fee_fixed_upfront.value,
                  fee_fixed_ongoing: this.refs.fee_fixed_ongoing.value,
                  tax_percent_fees: this.refs.tax_percent_fees.value,
                  tax_percent_interest: this.refs.tax_percent_interest.value,
                  insurance_percent_upfront: this.refs.insurance_percent_upfront
                    .value,
                  insurance_percent_ongoing: this.refs.insurance_percent_ongoing
                    .value,
                  insurance_fixed_upfront: this.refs.insurance_fixed_upfront
                    .value,
                  insurance_fixed_ongoing: this.refs.insurance_fixed_ongoing
                    .value,
                  security_deposit_percent_upfront: this.refs
                    .security_deposit_percent_upfront.value,
                  security_deposit_percent_ongoing: this.refs
                    .security_deposit_percent_ongoing.value,
                  security_deposit_fixed_upfront: this.refs
                    .security_deposit_fixed_upfront.value,
                  security_deposit_fixed_ongoing: this.refs
                    .security_deposit_fixed_ongoing.value,
                  interest_paid_on_deposit_percent: this.refs
                    .interest_paid_on_deposit_percent.value
                })
                .then(function(response) {
                  console.log(response)
                })
                .catch(function(error) {
                  console.log(error)
                })
            }}
          />
        </Grid>
      </Jumbotron>
    )
  }
}

export default FormOne
