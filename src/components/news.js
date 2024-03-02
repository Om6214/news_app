import React, { Component } from 'react'
import NewsItem from './newsitem'

export default class news extends Component {
  article = [
    {
      "source": {
      "id": "not avail",
      "name": "New York Post"
      },
      "author": "Jon Levine",
      "title": "House Republicans demand Google reveal what role US government had in developing woke Gemini AI - New York Post ",
      "description": "The House Judiciary Committee sent a letter to the parent company of Google and YouTube, insisting that all communications between the feds and Alphabet relating to Gemini be turned over to the com…",
      "url": "https://nypost.com/2024/03/02/us-news/house-republicans-demand-answers-from-google-on-woke-gemini-ai/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/gemini-ai-google-house-comp.jpg?quality=75&strip=all&1709379973&w=1024",
      "publishedAt": "2024-03-02T17:01:00Z",
      "content": "House Republicans are demanding documents from Google in an effort to learn what involvement the US government had in influencing the company’s woke artificial intelligence program, Gemini.\r\nOn Satur… [+2234 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "KTLA Los Angeles"
      },
      "author": "Austin Turner",
      "title": "Report: In-N-Out Burger eyeing expansion to send double-doubles to the entire west coast - KTLA Los Angeles",
      "description": "In-N-Out Burger’s apparent nationwide expansion could see the popular fast food chain establish its presence on the entire West Coast, according to reports. The company told USA Today that the first In-N-Out location in the state of Washington could be on its…",
      "url": "https://ktla.com/news/local-news/report-in-n-out-burger-eyeing-expansion-to-send-double-doubles-to-the-entire-west-coast/",
      "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2024/02/meal.jpg?w=1280",
      "publishedAt": "2024-03-02T16:35:12Z",
      "content": "In-N-Out Burger’s apparent nationwide expansion could see the popular fast food chain establish its presence on the entire West Coast, according to reports.\r\nThe company told USA Today that the first… [+1029 chars]"
      },
      {
      "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
      },
      "author": "Jagmeet Singh",
      "title": "Apple abandons its car: Here are other projects the company has killed - TechCrunch",
      "description": "As the Apple car is no longer in the works, it's worth looking back at the company's history of its shelved projects, from AirPower to a TV.",
      "url": "https://techcrunch.com/2024/03/02/apple-abandons-its-car-here-are-other-projects-the-company-has-killed/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/09/dims1.jpg?resize=1200,800",
      "publishedAt": "2024-03-02T15:31:41Z",
      "content": "Apple has scrapped plans to enter the automotive industry with its mysterious autonomous electric car, instead shifting focus to the wildly popular world of generative AI. The project saw the company… [+3243 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "Tipranks.com"
      },
      "author": "TipRanks",
      "title": "Nvidia at $820: Top Analyst Ivan Feinseth Looks for the Next Price Move - TipRanks.com - TipRanks",
      "description": "not avail",
      "url": "https://www.tipranks.com/news/nvidia-stock-above-800-ivan-feinseth-looks-for-the-next-price-move",
      "urlToImage": "not avail",
      "publishedAt": "2024-03-02T15:30:56Z",
      "content": "not avail"
      },
      {
      "source": {
      "id": "usa-today",
      "name": "USA Today"
      },
      "author": "Daniel de Visé",
      "title": "Financial stress peaks in the populations of these 10 American cities - USA TODAY",
      "description": "Chicago and Houston rank as the cities with the most people in financial distress, according to a new report from the personal finance site WalletHub.",
      "url": "https://www.usatoday.com/story/money/2024/03/02/top-10-financial-stress-cities/72788536007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/01/USAT/70733189007-1481491010.jpg?crop=5999,3389,x0,y0&width=3200&height=1808&format=pjpg&auto=webp",
      "publishedAt": "2024-03-02T15:02:19Z",
      "content": "Chicago and Houston rank as the cities with the most people in financial distress, according to a new report from the personal finance site WalletHub.\r\nThe analysis ranked 100 large cities on several… [+4928 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Lawyers who voided Elon Musk's pay as excessive want $6 billion fee - Reuters",
      "description": "not avail",
      "url": "https://www.reuters.com/legal/legal-team-who-voided-musks-tesla-pay-seek-fee-worth-595-bln-2024-03-01/",
      "urlToImage": "not avail",
      "publishedAt": "2024-03-02T14:31:00Z",
      "content": "not avail"
      },
      {
      "source": {
      "id": "not avail",
      "name": "9News.com KUSA"
      },
      "author": "Steve Staeger",
      "title": "Consumer Reports' top rated vehicles - 9News.com KUSA",
      "description": "Each year, Consumer Reports buys and tests 50 vehicles. Here are this year's top contenders.",
      "url": "https://www.9news.com/article/money/consumer/steve-on-your-side/consumer-reports-top-2024-vehicles/73-f09dacb6-a14d-4058-9238-2b0b6b3278e6",
      "urlToImage": "https://media.9news.com/assets/KUSA/images/20720cff-f180-4c24-895c-e1cd051a1af8/20720cff-f180-4c24-895c-e1cd051a1af8_1140x641.jpg",
      "publishedAt": "2024-03-02T14:25:00Z",
      "content": "DENVER Buying a new car can be stressful and expensive, but armed with expert information, it doesnt have to be.\r\nEvery year, Consumer Reports buys and tests about 50 new cars, measuring things like … [+3869 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "Yahoo Entertainment"
      },
      "author": "Peter Eichenbaum",
      "title": "NYCB Downgraded to Junk by Fitch, as Moody's Goes Even Deeper - Yahoo Finance",
      "description": "(Bloomberg) -- New York Community Bancorp’s credit grade was cut to junk by Fitch Ratings, and Moody’s Investors Service lowered its rating even further, a...",
      "url": "https://finance.yahoo.com/news/nycb-cut-junk-fitch-disclosing-233940411.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/6ruruHCw0Ugay1pfpKFzbg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/fe2283beaa2cd989a6a909f7d7eaaa39",
      "publishedAt": "2024-03-02T13:43:41Z",
      "content": "(Bloomberg) New York Community Bancorps credit grade was cut to junk by Fitch Ratings, and Moodys Investors Service lowered its rating even further, a day after the commercial real estate lender said… [+1635 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "Yahoo Entertainment"
      },
      "author": "Reuters",
      "title": "Super Micro surges as AI server maker set to join S&P 500 - Yahoo Finance",
      "description": "Super Micro and Deckers Outdoor Corp will be added to the S&P 500 prior to the start of trading on Monday, March 18, coinciding with a quarterly rebalance of...",
      "url": "https://finance.yahoo.com/news/super-micro-surges-ai-server-000955041.html",
      "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/97f5293009eaad11848fa7c1d9bbfb55",
      "publishedAt": "2024-03-02T13:15:30Z",
      "content": "(Reuters) - Shares of Super Micro Computer rallied 13.5% in extended trade on Friday after it was announced the seller of AI-optimized servers will join the S&amp;P 500.\r\nSuper Micro and Deckers Outd… [+1294 chars]"
      },
      {
      "source": {
      "id": "bloomberg",
      "name": "Bloomberg"
      },
      "author": "Charlie Wells",
      "title": "Remote Work Jobs: How the Office Debate Became a Culture War Flashpoint - Bloomberg",
      "description": "The debate over working remotely has turned toxic as companies call employees back to the office and workers resist the loss of a popular perk.",
      "url": "https://www.bloomberg.com/news/articles/2024-03-02/remote-work-jobs-how-the-office-debate-became-a-culture-war-flashpoint",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTAAfmTO_TM4/v0/1200x800.jpg",
      "publishedAt": "2024-03-02T13:00:15Z",
      "content": "Its a simple question that has transformed into a lightning rod: Where do you work from?\r\nNearly four years after pandemic-induced office shutdowns, the fight over working remotely or showing up in p… [+146 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "Forbes"
      },
      "author": "Billy Bambrough",
      "title": "U.S. Dollar ‘Collapse’—Bank Of America Issues Shocking ‘$1 Trillion Every 100 Days’ Warning Amid Huge Bitcoin, Ethereum, XRP And Crypto Price Boom To Rival Gold - Forbes",
      "description": "Bank of America﻿﻿ analysts have warned the U.S. debt load is about to ramp up to add $1 trillion every 100 days—fueling a bitcoin price surge...",
      "url": "https://www.forbes.com/sites/digital-assets/2024/03/02/us-dollar-collapse-bank-of-america-issues-shocking-1-trillion-every-100-days-warning-amid-huge-bitcoin-ethereum-xrp-and-crypto-price-boom-to-rival-gold/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/652281c5904439112e9cb52c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-03-02T12:45:35Z",
      "content": "Bitcoinalongside the wider ethereum, XRP and crypto markethas rocketed higher over the last year (with some forecasting a even \"bigger Wall Street wave coming\").\r\nSubscribe now to Forbes' CryptoAsset… [+3418 chars]"
      },
      {
      "source": {
      "id": "bloomberg",
      "name": "Bloomberg"
      },
      "author": "Julie Johnsson",
      "title": "Boeing (BA) Spirit Aero (SPR) Merger Would Be Major Strategic Move for 737 Maker - Bloomberg",
      "description": "Days after US regulators gave Boeing Co. a 90-day ultimatum to address quality lapses in its jets, the planemaker’s response is coming into focus — and it involves what stands to be its most consequential strategic move in years.",
      "url": "https://www.bloomberg.com/news/articles/2024-03-02/boeing-bets-big-on-spirit-aero-with-737-reputation-on-the-line",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iaAcuTwPPcYw/v1/1200x800.jpg",
      "publishedAt": "2024-03-02T12:30:00Z",
      "content": "Days after US regulators gave Boeing Co. a 90-day ultimatum to address quality lapses in its jets, the planemakers response is coming into focus and it involves what stands to be its most consequenti… [+449 chars]"
      },
      {
      "source": {
      "id": "business-insider",
      "name": "Business Insider"
      },
      "author": "Grace Kay",
      "title": "Elon Musk just threw down the gauntlet at Sam Altman - Business Insider",
      "description": "Elon Musk's case against OpenAI may be weak, but the AI venture could still pay a hefty price, experts say.",
      "url": "https://www.businessinsider.com/elon-musk-throws-down-gauntlet-sam-altman-openai-lawsuit-2024-3",
      "urlToImage": "https://i.insider.com/65e2094990413ab8e1d84c9a?width=1200&format=jpeg",
      "publishedAt": "2024-03-02T11:58:00Z",
      "content": "It was last May, and Elon Musk was sitting down for an interview with CNBC's David Faber.\r\nWhen asked about Altman and OpenAI, Musk grew visibly frustrated.\r\n\"It wouldn't exist without me,\" Musk said… [+4108 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "NDTV News"
      },
      "author": "not avail",
      "title": "Google Agrees To Restore Indian Apps After Centre's Intervention: Sources - NDTV",
      "description": "Google has initiated the process to restore Indian mobile apps which had been dropped from the Play Store over a dispute over service fees.",
      "url": "https://www.ndtv.com/india-news/google-to-restore-indian-apps-on-play-store-after-it-minister-ashwini-vaishnaws-intervention-say-sources-5162676",
      "urlToImage": "https://c.ndtvimg.com/2024-03/6ajgpmvc_google_625x300_02_March_24.jpeg",
      "publishedAt": "2024-03-02T11:17:45Z",
      "content": "Google has initiated the process to restore Indian mobile apps which had been dropped from the Play Store over a dispute over service fees. The decision was taken after the company's officials held a… [+1790 chars]"
      },
      {
      "source": {
      "id": "axios",
      "name": "Axios"
      },
      "author": "Axios",
      "title": "Abortion pill access: CVS, Walgreens to start selling mifepristone in some states - Axios",
      "description": "not avail",
      "url": "https://www.axios.com/2024/03/01/mifepristone-cvs-walgreens-abortion-pill",
      "urlToImage": "not avail",
      "publishedAt": "2024-03-02T10:22:50Z",
      "content": "not avail"
      },
      {
      "source": {
      "id": "not avail",
      "name": "Motley Fool"
      },
      "author": "Harsh Chauhan",
      "title": "2 Millionaire-Maker Artificial Intelligence (AI) Stocks - The Motley Fool",
      "description": "Investors looking to construct a million-dollar portfolio would do well to take a closer look at these two companies.",
      "url": "https://www.fool.com/investing/2024/03/02/2-millionaire-maker-artificial-intelligence-ai-sto/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/767173/two-people-celebrating-with-cash-in-a-car.jpg",
      "publishedAt": "2024-03-02T10:07:00Z",
      "content": "Buying and holding great companies for the long run is a tried-and-tested way of making money in the stock market, as investors can not only benefit from secular growth opportunities by following thi… [+5730 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "Coinpedia.org"
      },
      "author": "Sohrab Khawas",
      "title": "ChatGPT Prediction for Memecoins: Shiba Inu, Dogecoin, PEPE and WIF - Coinpedia Fintech News",
      "description": "Bitcoin (BTC), the pioneer and titan of the crypto realm, has been at the forefront of a remarkable rally, recently brushing heights near its historic",
      "url": "https://coinpedia.org/price-analysis/chatgpt-prediaction-for-memecoins-shiba-inu-dogecoin-pepe-and-wif/",
      "urlToImage": "http://image.coinpedia.org/wp-content/uploads/2024/03/01223820/meme-coins.webp",
      "publishedAt": "2024-03-02T10:04:34Z",
      "content": "Bitcoin (BTC), the pioneer and titan of the crypto realm, has been at the forefront of a remarkable rally, recently brushing heights near its historic peak of $64,000. This resurgence is underscored … [+3229 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "Fox Business"
      },
      "author": "Landon Mion",
      "title": "Mega Millions jackpot rises to $650M after no ticket matches winning numbers - Fox Business",
      "description": "The Mega Millions jackpot grew to an estimated $650 million for the next drawing after no one matched the winning tickets Friday night.",
      "url": "https://www.foxbusiness.com/economy/mega-millions-jackpot-rises-650m-after-no-ticket-matches-winning-numbers",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/04/0/0/Mega-Logo-A.jpg?ve=1&tl=1",
      "publishedAt": "2024-03-02T09:14:00Z",
      "content": "The Mega Millions jackpot grew to an estimated $650 million after nobody matched the winning tickets in the drawing Friday night.\r\nThe winning numbers drawn for Friday night's $607 million drawing we… [+1512 chars]"
      },
      {
      "source": {
      "id": "not avail",
      "name": "WCVB Boston"
      },
      "author": "Shaun Ganley",
      "title": "Massachusetts city mandating packaging, plastic utensil changes - WCVB Boston",
      "description": "Customers ordering takeout from restaurants may see some changes with food containers -- and better not assume the food will be coming with plastic utensils.",
      "url": "https://www.wcvb.com/article/newton-massachusetts-packaging-plastic-utensil-changes/60051986",
      "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/styrofoam-food-container-ap-65e2b4094e7c2.jpg?crop=1.00xw:0.874xh;0,0.0859xh&resize=1200:*",
      "publishedAt": "2024-03-02T05:12:00Z",
      "content": "NEWTON, Mass. —Customers ordering takeout from restaurants in the city of Newton may see some changes with food containers -- and better not assume the food will be coming with plastic utensils.\r\nAs … [+622 chars]"
      },
      {
      "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
      },
      "author": "Trisha Thadani",
      "title": "California approves Waymo expansion to LA and highways - The Washington Post",
      "description": "Friday’s decision by California state regulators allows Waymo to expand massively in California, despite sharp opposition from local leaders.",
      "url": "https://www.washingtonpost.com/technology/2024/03/01/waymo-expands-california-los-angeles-highways/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/33KHGSNSAM2337552CNUM4NLDA_size-normalized.jpg&w=1440",
      "publishedAt": "2024-03-02T04:32:00Z",
      "content": "SAN FRANCISCO California regulators on Friday granted Alphabets self-driving car division Waymo permission to expand its robotaxi service to include highways in several Bay Area cities and large swat… [+3059 chars]"
      }
      
  ]
  constructor(){
    super();
    console.log("hello I am a constructor") 
    this.state = {
      article : this.article,
      loading:false
    }
  }
  render() {
    return (
      <div>
        <div className="container text-center">
            <div className="row my-5">
                {this.state.article.map((element)=>{
                  return <div className="col" key={element.url}>
                  <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
                })}
            </div>
        </div>
      </div>
    )
  }
}
