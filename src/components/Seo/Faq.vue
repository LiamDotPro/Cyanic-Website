<template>
  <div class="Faq">
    <div class="container">

      <!--<div class="row service-row service-row-boxed align-items-center">-->
        <!--<div class="col-12">-->
          <!--<div class="testimonial-tile">-->
            <!--<h2>Can esports / gaming websites benefit from SEO?</h2>-->
            <!--<p>For anyone reading this who are unfamiliar with “esports” it is a term referring to the competitive side of video games. With tournaments awarding prize pools up to as much of $24.7 million every year, often with a wide range of smaller yet still noticeably grand prizes for the winners happening most months it is a flourishing and growing market.</p>-->
            <!--<p>Like most owners of business and personal websites, who want their website to be visited and engaged with by more users, esports teams, organisations and content websites want the same. With their goal to reach a wider audience than they already are ranking highly in search engines can really help them to be found by and capture the attention of potential fans and returning users. Although we understand that often SEO will rightfully not be as important as achieving higher results in the tournaments you compete in, it can really help focus attention of producing a better website and content that you can benefit from.</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <div class="row service-row service-row-boxed align-items-center">
        <div class="col-12">
          <div class="testimonial-tile">
            <h2>What results can we promise</h2>
            <p>
              Honestly, with SEO we feel it takes a great deal of experience to promise guaranteed SEO results for every business that you work with to get the results they really want. What we can promise is that while optimising your website it will gradually improve on it’s own merits which means it will be ready to tackle any search engine changes. Many other companies often utilise black hat techniques which in the short term provide results but aren't good in the long term for any SEO campaign, we promise to create stability and results that will work over the long term and won’t have your website flagged or filtered from results.</p>
          </div>
        </div>
      </div>
      <div class="row service-row service-row-boxed align-items-center">
        <div class="col-12">
          <div class="testimonial-tile">
            <h2>Reporting on the results</h2>
            <p>
              We understand that if you haven’t experienced SEO and the process before it may be worrying or confusing that after the first changes have been made to the website and you search on Google for your business that it isn’t the first or even on the second page of results. Patience is key as the search engine slowly moves your website up the rankings, from experience a website that slowly gets to the top of the results often has a far better chance of staying there for a longer period. Many online SEO guru’s will offer a service that gets you to the top quickly only for the search engine to blacklist the website or reposition it back to where it started. You can expect within the reporting to see a slow and steady approach where ground is being covered towards the best outcome for each client.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="seo-features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Benefits of choosing us for your SEO</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="feature-tile">
              <!--<icon class="feature-icon" name="cog" scale="2"></icon>-->
              <h3>You have the control</h3>
              <p>
                We understand that giving us access to your website you’ve invested time and money into can signal alarms. We appreciate these concerns and leave the control in your hands, how we implement the SEO changes to your website and content is your decision. Options include us providing our proposed changes for your review and approval before they are made or if you are comfortable we can take full control and report on the changes and subsequent results after they are made.
              </p>
            </div>
          </div>
          <div class="col-6">
            <div class="feature-tile">
              <!--<icon class="feature-icon" name="check" scale="2"></icon>-->
              <h3>Page Load Speed</h3>
              <p>
                If your website wasn’t built by us it may be running slowly which as well as irritating visitors of your website also negatively impacts your ranking factors in search engines. In such a competitive digital space users expect your website to load quickly on any device they access it from. As part of our Business Package optimisation process we make changes that will reduce the time it takes for users to see and search engines to load your content.
              </p>
            </div>
          </div>
        </div>
          <div class="row">
            <div class="col-6">
              <div class="feature-tile">
                <!--<icon class="feature-icon" name="cog"></icon>-->
                <h3>Transparency</h3>
                <p>
                  We understand that with services such as SEO where the results and deliverables aren’t always easy or quick to be seen it can be daunting, It can often take some time to get results but alongside reporting were happy to answer any questions / queries you might have. Were also happy to provide you with full examples of how our SEO service has helped other businesses to succeed in their areas of business. We can also advise you on the correct service you take out to make sure you're getting your money's worth when buying services with us, If you're a small business then it’s unlikely our business plus package will be what you need at this point in time.
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="feature-tile">
                <!--<icon class="feature-icon" name="key" scale="2"></icon>-->
                <h3>Not locked in with long contracts</h3>
                <p>
                  We understand that SEO can be something you want to decide on monthly for a number of reasons, because of this we don’t want you to feel pressured into signing long contracts. We work on a monthly basis as standard and instead offer discount incentives when you pay for 3, 6 or 12 month SEO campaigns (see pricing section for more details).
                </p>
              </div>
            </div>
          </div>

      </div>
    </div>
</div>
</template>

<script>
  import '../../assets/icons/arrow-right'
  export default {
    name: 'Faq',
    data () {
      return {
        header: 'Building Web Experiences for the Future'
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Start coding!
  @import "../../assets/master";

  .Faq {
    background: $primaryWhite;
    padding-bottom: 30px;

    .service-row {
      padding: 80px 0;
      margin-bottom: 30px;
    }
    .service-row-boxed {
      background-color: #fff;
      box-shadow: 0 0 15px 0 rgba(59, 60, 118, 0.1);
      padding: 45px 35px;
    }
    .seo-features {
      padding-top: 60px;
      padding-bottom: 80px;

      .feature-tile {
        margin-bottom: 30px;
        padding-right: 25px;

        h3 {
          display: inline-block;
        }

        .feature-icon {
          color: #027ef1;
        }
      }
    }
  }
</style>
