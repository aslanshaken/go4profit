export const BLOG_AUTHOR = 'Go4Profit Team';
export const BLOG_PUBLISHED = '2026-10-08';
export const BLOG_PUBLISHED_LABEL = 'October 8, 2026';

function post(entry) {
  return {
    author: BLOG_AUTHOR,
    published: BLOG_PUBLISHED,
    publishedLabel: BLOG_PUBLISHED_LABEL,
    ...entry,
  };
}

export const POSTS = [
  post({
    slug: 'making-sales-but-still-short-on-cash',
    title: 'Making Sales but Still Short on Cash?',
    description:
      'Your business is busy, but the bank balance can still feel too low when payroll, rent, or suppliers come due.',
    category: 'Cash flow',
    image: '/images/blog/blog-cash-flow.jpg',
    imageAlt: 'Illustration of a person reviewing invoices at a desk',
    sources: [
      {
        label: 'FDIC, Money Smart for Small Business: Cash Flow',
        href: 'https://www.fdic.gov/consumer-resource-center/mssb-m10-pg.pdf',
      },
    ],
    closing: {
      text: 'Need a clearer view of your cash flow? Book a free consultation.',
      to: '/book',
      label: 'Book a free consultation',
    },
    intro: [
      'Your business is busy. Customers are buying, invoices are going out, and revenue looks encouraging. But when payroll, rent, or supplier payments come due, your bank balance feels too low.',
      'Where is the money going?',
      'The answer often involves the timing of payments—and the difference between sales, profit, and cash.',
    ],
    sections: [
      {
        heading: 'Sales don’t always mean money in the bank',
        blocks: [
          {
            type: 'p',
            text: 'If you invoice a customer today and they pay next month, you still need to cover your expenses while you wait.',
          },
          {
            type: 'p',
            text: 'Under accrual accounting, that sale may appear in your revenue before you collect the payment. Under cash accounting, it generally appears when payment arrives. Either way, knowing when customers will actually pay matters.',
          },
          {
            type: 'p',
            text: 'Your business can also spend cash on things that don’t immediately appear as expenses in the same amount. Equipment purchases, loan principal payments, and owner withdrawals can all affect your bank balance differently from your profit.',
          },
          {
            type: 'p',
            text: 'That is why checking your profit and loss statement alone may not explain your cash position.',
          },
        ],
      },
      {
        heading: 'Start with three questions',
        blocks: [
          {
            type: 'h3',
            text: 'Who owes you money?',
          },
          {
            type: 'p',
            text: 'Review unpaid invoices, their due dates, and whether any payments are overdue.',
          },
          {
            type: 'h3',
            text: 'What payments are coming up?',
          },
          {
            type: 'p',
            text: 'List payroll, rent, suppliers, debt payments, and other expected outflows.',
          },
          {
            type: 'h3',
            text: 'How much cash will remain?',
          },
          {
            type: 'p',
            text: 'Compare your available balance and expected collections with those payments.',
          },
          {
            type: 'p',
            text: 'A simple weekly forecast can make the next few weeks easier to understand.',
          },
        ],
      },
      {
        heading: 'A practical example',
        blocks: [
          { type: 'p', text: 'This example is fictional.' },
          {
            type: 'p',
            text: 'Imagine a business has $12,000 in its bank account. It expects to collect $8,000 next week and needs to pay $15,000 in expenses.',
          },
          {
            type: 'p',
            text: 'If those collections arrive on time, its projected closing balance is $5,000. If they arrive late, it faces a $3,000 shortfall.',
          },
          {
            type: 'p',
            text: 'The sales haven’t changed. The payment timing has.',
          },
        ],
      },
      {
        heading: 'Build a routine you can maintain',
        blocks: [
          {
            type: 'p',
            text: 'Send invoices promptly, make payment terms clear, and follow up consistently. Review upcoming expenses before committing to another large purchase.',
          },
          {
            type: 'p',
            text: 'Update your forecast weekly using realistic payment dates. A forecast helps you prepare; it isn’t a guarantee that customers will pay when expected.',
          },
        ],
      },
      {
        heading: 'How Go4Profit helps',
        blocks: [
          {
            type: 'p',
            text: 'We keep your records organized and prepare financial reports that help you understand your business. With advisory support, we can also review cash flow and help you plan ahead.',
          },
        ],
        links: [
          { to: '/services#bookkeeping', label: 'Monthly bookkeeping' },
          { to: '/services#advisory', label: 'Business advisory' },
        ],
      },
    ],
  }),
  post({
    slug: 'months-behind-on-your-books',
    title: 'Months Behind on Your Books? Start Here.',
    description:
      'Receipts pile up and the reports stop feeling reliable. Start with what is missing, then work through the records in order.',
    category: 'Bookkeeping',
    image: '/images/blog/blog-catch-up.jpg',
    imageAlt: 'Illustration of loose receipts beside neatly stacked folders',
    sources: [
      {
        label: 'Intuit QuickBooks, Fix issues for accounts you reconciled in the past',
        href: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/statement-reconciliation/fix-issues-accounts-reconciled-past-quickbooks/L8lx6PQQ5_US_en_US',
      },
    ],
    closing: {
      text: 'Ready to get back on track? Book a free consultation.',
      to: '/book',
      label: 'Book a free consultation',
    },
    intro: [
      'One busy month turns into several. Receipts pile up, transactions remain uncategorized, and you stop trusting the reports in your accounting software.',
      'Now someone needs your financial statements, and you’re not sure where to start.',
      'You don’t have to solve everything at once. Start by understanding what is missing, then work through your records in order.',
    ],
    sections: [
      {
        heading: 'Catch-up and cleanup solve different problems',
        blocks: [
          {
            type: 'h3',
            text: 'Catch-up bookkeeping',
          },
          {
            type: 'p',
            text: 'Catch-up bookkeeping records work that hasn’t been completed for previous months.',
          },
          {
            type: 'h3',
            text: 'Cleanup',
          },
          {
            type: 'p',
            text: 'Cleanup corrects problems in existing records, such as duplicate transactions, incorrect categories, or account balances that don’t match supporting documents.',
          },
          { type: 'p', text: 'Some businesses need both.' },
        ],
      },
      {
        heading: 'Gather your records first',
        blocks: [
          {
            type: 'p',
            text: 'Collect bank and credit card statements for the missing periods. Include closed accounts if they were used during that time.',
          },
          { type: 'p', text: 'You may also need:' },
          {
            type: 'ul',
            items: [
              'Customer invoices and payment records',
              'Receipts and vendor bills',
              'Payroll reports',
              'Loan statements',
              'Equipment purchase documents',
              'Previous financial reports and relevant tax returns',
            ],
          },
          {
            type: 'p',
            text: 'Keep business and personal transactions clearly identified. If you paid a business expense personally, provide the supporting record rather than leaving someone to guess.',
          },
        ],
      },
      {
        heading: 'Find the last reliable starting point',
        blocks: [
          {
            type: 'p',
            text: 'Before adding transactions, check when your accounts were last reconciled and whether those balances are reliable.',
          },
          {
            type: 'p',
            text: 'Reconciliation means comparing your accounting records with bank or credit card statements and resolving differences. A connected bank feed alone doesn’t complete that work.',
          },
          {
            type: 'p',
            text: 'Missing entries, duplicates, and incorrect opening balances can make later months harder to reconcile.',
          },
        ],
      },
      {
        heading: 'Work through each period',
        blocks: [
          {
            type: 'p',
            text: 'Record missing activity, match payments to existing records, and resolve unclear transactions. Review transfers and loan payments carefully so they aren’t incorrectly treated as income or operating expenses.',
          },
          {
            type: 'p',
            text: 'Then reconcile the accounts and prepare updated reports.',
          },
          {
            type: 'p',
            text: 'Avoid adding an unexplained adjustment simply to make a balance match. The difference needs to be understood.',
          },
        ],
      },
      {
        heading: 'Keep the backlog from returning',
        blocks: [
          {
            type: 'p',
            text: 'Once your books are current, choose a regular schedule for sharing documents and answering questions.',
          },
          {
            type: 'p',
            text: 'A simple monthly routine is easier to maintain than another year-end rush.',
          },
        ],
      },
      {
        heading: 'How Go4Profit helps',
        blocks: [
          {
            type: 'p',
            text: 'We review your records and provide a clear scope, quote, and estimated timeline. Our team completes the agreed catch-up or cleanup work and follows up on missing information.',
          },
        ],
        links: [
          { to: '/services#cleanup', label: 'Catch-up and cleanup' },
          { to: '/services#bookkeeping', label: 'Monthly bookkeeping' },
        ],
      },
    ],
  }),
  post({
    slug: 'revenue-is-growing-why-isnt-your-profit',
    title: 'Revenue Is Growing. Why Isn’t Your Profit?',
    description:
      'More sales can leave less money. See how direct costs and overhead can grow faster than revenue.',
    category: 'Profitability',
    image: '/images/blog/blog-profit.jpg',
    imageAlt: 'Illustration of two growing shapes with different amounts left over',
    sources: [
      {
        label: 'Intuit QuickBooks, What is gross profit?',
        href: 'https://quickbooks.intuit.com/global/resources/accounting/what-is-gross-profit/',
      },
    ],
    closing: {
      text: 'Want to understand what you’re keeping? Book a free consultation.',
      to: '/book',
      label: 'Book a free consultation',
    },
    intro: [
      'You have more customers, more orders, and more work. Revenue is growing—but there isn’t much more money left over.',
      'Growth can bring additional costs as well as additional sales. To understand whether it is helping your business, look at what remains after delivering the work and running the company.',
    ],
    sections: [
      {
        heading: 'Look beyond total revenue',
        blocks: [
          {
            type: 'p',
            text: 'Start with the direct costs of your products or services. Depending on your business, these might include materials, subcontractors, or labor directly involved in delivering the work.',
          },
          {
            type: 'p',
            text: 'Then review overhead: expenses such as rent, office salaries, software, and administration.',
          },
          {
            type: 'p',
            text: 'Gross profit is revenue minus the cost of goods sold or services delivered. Gross margin expresses that amount as a percentage of revenue.',
          },
          {
            type: 'p',
            text: 'Use consistent cost categories so comparisons between months are meaningful.',
          },
        ],
      },
      {
        heading: 'More sales can produce less profit',
        blocks: [
          {
            type: 'p',
            text: 'Consider this simplified fictional example.',
          },
          {
            type: 'table',
            caption: 'Fictional monthly results. These figures are not from a client.',
            headers: ['Monthly results', 'Earlier month', 'Later month'],
            rows: [
              ['Revenue', '$50,000', '$65,000'],
              ['Direct costs', '$30,000', '$43,000'],
              ['Gross profit', '$20,000', '$22,000'],
              ['Overhead', '$12,000', '$16,000'],
              ['Profit before other items and taxes', '$8,000', '$6,000'],
            ],
          },
          {
            type: 'p',
            text: 'Revenue increased by $15,000, but profit fell by $2,000.',
          },
          {
            type: 'p',
            text: 'The business kept less of each sales dollar, and overhead also increased. Looking only at revenue would hide both changes.',
          },
          {
            type: 'p',
            text: 'The gross-profit and margin explanations follow Intuit’s definitions. The table above is an original fictional example.',
          },
        ],
      },
      {
        heading: 'Check where the difference comes from',
        blocks: [
          {
            type: 'p',
            text: 'Review your largest costs and how they changed relative to sales.',
          },
          { type: 'p', text: 'Ask:' },
          {
            type: 'ul',
            items: [
              'Have supplier or labor costs increased?',
              'Are discounts reducing your margin?',
              'Does some work require more time than expected?',
              'Have new subscriptions or staffing costs added overhead?',
              'Are your records complete enough to trust the comparison?',
            ],
          },
          {
            type: 'p',
            text: 'A bookkeeping error can distort the picture, so confirm the numbers before making a major decision.',
          },
        ],
      },
      {
        heading: 'Review profitability by the work you do',
        blocks: [
          {
            type: 'p',
            text: 'Where your records support it, compare results by service, project, customer, or location.',
          },
          {
            type: 'p',
            text: 'A busy service may contribute less than a smaller one. A large customer may require substantial support or repeated rework.',
          },
          {
            type: 'p',
            text: 'Use those findings to consider pricing, delivery costs, and which work deserves more attention. Avoid cutting costs without understanding their effect on quality and service.',
          },
        ],
      },
      {
        heading: 'How Go4Profit helps',
        blocks: [
          {
            type: 'p',
            text: 'We organize your financial records and help explain your reports. Advisory and custom reporting can provide a closer look at where your business earns and spends.',
          },
        ],
        links: [
          { to: '/services#bookkeeping', label: 'Monthly bookkeeping' },
          { to: '/services#advisory', label: 'Business advisory' },
        ],
      },
    ],
  }),
  post({
    slug: 'need-a-business-loan-get-your-reports-ready',
    title: 'Need a Business Loan? Get Your Financial Reports Ready.',
    description:
      'A lender asks for a profit and loss statement and a balance sheet. Learn what to organize before you send them.',
    category: 'Business financing',
    image: '/images/blog/blog-loan.jpg',
    imageAlt: 'Illustration of two people reviewing a financial report together',
    sources: [
      {
        label: 'Bank of America, What is a business loan and how do I get one?',
        href: 'https://business.bankofamerica.com/en/resources/what-is-business-loan-and-how-do-i-get-one',
      },
    ],
    closing: {
      text: 'Need updated reports for a financing application? Book a free consultation.',
      to: '/book',
      label: 'Book a free consultation',
    },
    intro: [
      'You’re ready to buy equipment, add another truck, or expand your business. Then the lender asks for a profit and loss statement, a balance sheet, and details of your existing loans.',
      'If your books are behind, gathering those documents can become a project of its own.',
      'Preparing early gives you time to correct errors, answer questions, and understand the numbers you’re submitting.',
    ],
    sections: [
      {
        heading: 'Ask for the lender’s checklist first',
        blocks: [
          {
            type: 'p',
            text: 'Different lenders and financing products require different documents. Before preparing a package, ask which reports they need, which periods they should cover, and how recent they must be.',
          },
          {
            type: 'p',
            text: 'Also confirm whether ordinary management reports are sufficient or whether the lender requires a compilation, review, or audit. Those are different services with different requirements.',
          },
          {
            type: 'p',
            text: 'Don’t assume a report exported from your accounting software meets every request.',
          },
        ],
      },
      {
        heading: 'Understand the main reports',
        blocks: [
          { type: 'h3', text: 'Profit and loss statement' },
          {
            type: 'p',
            text: 'Shows revenue, expenses, and profit or loss over a period.',
          },
          { type: 'h3', text: 'Balance sheet' },
          {
            type: 'p',
            text: 'Shows assets, liabilities, and equity at a particular date.',
          },
          { type: 'h3', text: 'Debt schedule' },
          {
            type: 'p',
            text: 'Summarizes existing borrowing, including outstanding balances and payment obligations.',
          },
          {
            type: 'p',
            text: 'A lender may also request tax returns, bank statements, ownership information, forecasts, or an explanation of how you plan to use the funds.',
          },
        ],
      },
      {
        heading: 'Check that the information is consistent',
        blocks: [
          {
            type: 'p',
            text: 'Reconcile your accounts and review important balances before sending reports.',
          },
          {
            type: 'p',
            text: 'Make sure loan balances reflect the supporting statements and that equipment purchases have been recorded appropriately.',
          },
          {
            type: 'p',
            text: 'Where financial statements and tax returns differ, ask your accounting professional to explain the reason. Accounting methods, timing, and tax adjustments can create legitimate differences.',
          },
        ],
      },
      {
        heading: 'A practical example',
        blocks: [
          { type: 'p', text: 'This example is fictional.' },
          {
            type: 'p',
            text: 'A trucking company wants to finance another truck. Its bank transactions are entered, but its current loans and equipment purchases haven’t been properly recorded.',
          },
          {
            type: 'p',
            text: 'The reports may look complete while giving an incomplete picture of what the company owns and owes.',
          },
          {
            type: 'p',
            text: 'Resolving those items first makes the information more useful to both the owner and the lender.',
          },
        ],
      },
      {
        heading: 'Keep a reusable financial folder',
        blocks: [
          {
            type: 'p',
            text: 'Store current reports, loan documents, and supporting records together. Update the folder regularly so you’re better prepared for future requests.',
          },
          {
            type: 'p',
            text: 'Accurate reports support an application, but they don’t guarantee approval. Lenders also assess repayment capacity, credit, and their own eligibility criteria.',
          },
        ],
      },
      {
        heading: 'How Go4Profit helps',
        blocks: [
          {
            type: 'p',
            text: 'We help organize your books and prepare financial reports. Share your lender’s requirements, and we’ll confirm the work, timeline, and pricing.',
          },
        ],
        links: [
          { to: '/services#bookkeeping', label: 'Monthly bookkeeping' },
          { to: '/services#cleanup', label: 'Catch-up and cleanup' },
        ],
      },
    ],
  }),
  post({
    slug: 'still-doing-accounting-by-hand',
    title: 'Still Doing Accounting by Hand? Where AI Can Help.',
    description:
      'Repetitive accounting work takes time without helping you understand the business. See where technology can help and where judgment still matters.',
    category: 'AI & accounting',
    image: '/images/blog/blog-ai.jpg',
    imageAlt: 'Illustration of loose documents beside an organized stack of folders',
    sources: [
      {
        label: 'U.S. Small Business Administration, AI for small business',
        href: 'https://legacy.sba.gov/business-guide/manage-your-business/ai-small-business',
      },
    ],
    closing: {
      text: 'Want simpler accounting with personal support? Book a free consultation.',
      to: '/book',
      label: 'Book a free consultation',
    },
    intro: [
      'You download statements, rename receipts, copy information into spreadsheets, and send reminders for missing documents.',
      'Much of that work is repetitive. It takes time, but it doesn’t necessarily help you understand your business better.',
      'Technology can simplify parts of the process. The useful question is which tasks it can handle reliably—and where your team’s experience matters.',
    ],
    sections: [
      {
        heading: 'Start with one recurring problem',
        blocks: [
          { type: 'p', text: 'You don’t need to automate everything at once.' },
          {
            type: 'p',
            text: 'Choose a task that happens often and has a clear outcome: organizing documents, suggesting transaction categories, or preparing a routine summary.',
          },
          {
            type: 'p',
            text: 'Understand the current process before changing it. Who provides the information? Who checks it? What happens when something is missing?',
          },
          {
            type: 'p',
            text: 'Automating a confusing process can spread the confusion faster.',
          },
        ],
      },
      {
        heading: 'Where AI can help',
        blocks: [
          {
            type: 'p',
            text: 'Depending on the tool and available data, AI can assist with:',
          },
          {
            type: 'ul',
            items: [
              'Extracting information from receipts and invoices',
              'Suggesting categories based on transaction patterns',
              'Identifying unusual changes for further investigation',
              'Summarizing financial information',
              'Drafting reminders and organizing open questions',
            ],
          },
          {
            type: 'p',
            text: 'These capabilities need testing against your actual records. A tool that performs well on one task may struggle with another.',
          },
        ],
      },
      {
        heading: 'Where professional judgment matters',
        blocks: [
          { type: 'p', text: 'A payment description rarely tells the whole story.' },
          {
            type: 'p',
            text: 'A transaction might be an expense, a loan payment, a transfer, or an owner contribution. The right treatment depends on the documents and business context.',
          },
          {
            type: 'p',
            text: 'People also need to resolve questions, consider unusual situations, and explain what the results mean for your decisions.',
          },
          {
            type: 'p',
            text: 'AI suggestions should support that work rather than silently become the final answer.',
          },
        ],
      },
      {
        heading: 'A practical example',
        blocks: [
          { type: 'p', text: 'This example is fictional.' },
          {
            type: 'p',
            text: 'A business regularly pays the same supplier. Software may suggest a category based on previous transactions.',
          },
          {
            type: 'p',
            text: 'But this month, the payment includes a new piece of equipment rather than the usual supplies.',
          },
          {
            type: 'p',
            text: 'The pattern is useful. The invoice provides the context needed to make the correct decision.',
          },
        ],
      },
      {
        heading: 'Measure whether the change helps',
        blocks: [
          {
            type: 'p',
            text: 'Track time saved, errors found, and how often someone needs to correct the output.',
          },
          {
            type: 'p',
            text: 'Keep access limited to what the task requires, and understand how the tool handles business information before uploading sensitive records.',
          },
          {
            type: 'p',
            text: 'Good automation should make the process easier to follow and give your team more capacity to help.',
          },
        ],
      },
      {
        heading: 'How Go4Profit works',
        blocks: [
          {
            type: 'p',
            text: 'Our team combines accounting experience with AI-powered technology to reduce routine manual work. We also build custom tools and dashboards around agreed business needs.',
          },
        ],
        links: [
          { to: '/platform', label: 'Client portal' },
          { to: '/services#ai-tools', label: 'Custom AI tools and dashboards' },
        ],
      },
    ],
  }),
];

export function getPost(slug) {
  return POSTS.find((item) => item.slug === slug) || null;
}
