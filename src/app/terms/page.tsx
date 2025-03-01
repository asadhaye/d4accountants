import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function TermsPage() {
  return (
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600 text-center"
            >
              Terms and Conditions
            </motion.h1>

            <motion.div
              variants={fadeIn}
              className="prose prose-lg prose-invert max-w-none"
            >
              <p className="text-gray-300 mb-8">
                These standard terms of business apply unless changes are expressly agreed in writing in the Engagement Letter. They form the contract between you and us together with the Engagement Letter and the Description of the Services.
              </p>

              <div className="text-gray-300 mb-6">
                <p>The terms defined in the Engagement Letter have the same meaning in these Terms.</p>
                <p>Services Description – the description of the Services as set out in the Engagement Letter and/or the applicable Services Description document.</p>
                <p>Terms – means these terms of business.</p>
                <p>you/your – means the client identified in the Engagement Letter.</p>
                <p>we/us/our – means D4 Accountants which is a trade name of DIMENSIONS 4 CONSULTANTS LTD, (Company No 14550685)</p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-amber-400">1. Professional Obligations</h2>
              
              <div className="mb-6">
                <p className="text-gray-300">1.1 Where we become aware of errors made by HM Revenue & Customs you give us authority to correct them. We will not be liable for any loss, damage or cost arising from our compliance with statutory or regulatory obligations.</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-amber-400">Professional Indemnity Insurance</h3>
              <div className="mb-6">
                <p className="text-gray-300">1.2 In accordance with the disclosure requirements of the Provision of Services Regulations 2009, our professional indemnity insurer details are available by contacting us.</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-amber-400">Our Details</h3>
              <div className="mb-6">
                <p className="text-gray-300">1.3 In accordance with the disclosure requirements of the Provision of Services Regulations 2009, we are a company limited by shares.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-amber-400">2. Fees</h2>
              
              <div className="space-y-4 text-gray-300">
                <p>2.1 Our fees are calculated on the basis specified in the Engagement Letter. In addition, we may charge disbursements of travel, accommodation and other expenses incurred in dealing with your affairs.</p>
                
                <p>2.2 If it is necessary for us to carry out work that is outside the scope of the Engagement Letter, we will advise you of this in advance. Any additional work will result in additional fees being charged. We would therefore like to point out that it is in your interests to ensure that the information you provide us with is completed to the agreed stage.</p>
                
                <p>2.3 If we give you an estimate of our fees for carrying out any specific work, then that estimate will not be contractually binding unless we have explicitly stated that will be the case. Any additional work will form part of this Engagement and be deemed Services unless we specify otherwise.</p>
                
                <p>2.4 Any queries you have on our invoices must be notified to us within 21 days of receipt or we shall deem you to have accepted that payment is due.</p>
                
                <p>2.5 Where a scheduled monthly payment is not made, any fees invoiced to you that are outstanding at that time will immediately become due for payment in entirety.</p>
                
                <p>2.6 Unless the Engagement Letter confirms that Services are not provided for a month period you agree that the Engagement is for an initial term of 1 month which will become a rolling monthly agreement thereafter unless it is terminated in accordance with these Terms. You are responsible for the fees due for a full month term once it begins.</p>
                
                <p>2.7 You may have an insurance policy or membership of a trade or professional body that entitles you to assistance with payment of our fees in some situations. A particular example would be assistance with an investigation by HM Revenue & Customs. Unless you arranged the insurance through us then you will need to advise us of any such cover you have. Please note that you remain liable for our fees regardless of whether all or part are liable to be paid by your insurers.</p>
                
                <p>2.8 We reserve the right to charge interest on overdue accounts at the current rate under the Late Payment of Commercial Debts (Interest) Act 1998. We also reserve the right to terminate our engagement and cease acting if payment of any fees billed is unduly delayed. We accept settlement of fees by certain credit cards. If we terminate the Engagement due to unpaid fees, we are entitled to recover any fees which should have been paid during the remaining term.</p>
                
                <p>2.9 In the event that we cease to act for you then you agree to meet all reasonable costs of providing information to your new advisers. In particular, you agree to meet these costs where we are required by law to provide information to a successor firm.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-amber-400">3. Help us to give you the right service</h2>
              
              <div className="space-y-4 text-gray-300">
                <p>3.1 If at any time you would like to discuss with us how our service to you could be improved, or if you are dissatisfied with the service you are receiving, please let us know by contacting us.</p>
                
                <p>3.2 We undertake to investigate any complaint carefully and promptly and do all we can to explain the position to you. Complaints should be sent by email to info@d4accountants.co.uk with the subject line as compliant.</p>
                
                <p>3.3 In order for us to provide you with a high quality service on an ongoing basis it is essential that you provide us with relevant records and information when requested, reply to correspondence in a timely manner and otherwise follow the terms of the agreement between us set out in these Terms and associated Engagement Letters and Services Document. We therefore reserve the right to cancel the engagement between us with immediate effect in the event of:</p>
                
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>your insolvency, bankruptcy or other arrangement being reached with creditors;</li>
                  <li>failure to pay our fees by the due dates;</li>
                  <li>either party being in breach of their obligations where this is not corrected within 30 days of being asked to do so.</li>
                </ul>
                
                <p>3.4 Should we resign, or be requested to resign, we will normally issue a Disengagement Letter to ensure that our respective responsibilities are clear. Should we have no contact with you for a period of 3 months or more we may issue to your email address a Disengagement Letter and hence cease to act.</p>
                
                <p>3.5 If the Engagement is terminated under clause 3.3 or 3.4 you will be responsible for the payment of any fees which should have been paid for any remaining period of any Term.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-amber-400">4. Commissions or other benefits</h2>
              
              <div className="text-gray-300">
                <p>4.1 In some circumstances, commissions or other benefits may become payable to us, or one of our associates, in respect of transactions we or such associates arrange for you. If this happens,</p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}