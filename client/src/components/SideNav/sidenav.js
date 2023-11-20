import React, { useState } from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = () => {

  const [show, setShow] = useState(true)

  const showMore = () => {
    setShow(!show)
  }

  return (
    <>
      <div className="sidenavCont">
        <div className="sidenavLinksCont">
          <Link to="/profile" className="sidenavLinks">
            <img className='sidenavProfile' src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=db1b99&_nc_eui2=AeHJrtmxZN7CUKWOD5Xpd-aSso2H55p0AlGyjYfnmnQCUX4d7vXTtvju7-hMDxyY-B7HLCdlRDfD_-ewE8RCimOz&_nc_ohc=yA87YnT4NJQAX_LIEqs&_nc_ht=scontent-jnb1-1.xx&oh=00_AfB9IGLjHjc0SiG_NdK1zz9SZYuIQomVC4uJsAaSpT43Yw&oe=657A6EB8" width="100%" height="100%" />
            <p>Name Surname</p>
          </Link>
          <a href="https://www.facebook.com/friends" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavFriends'></div><p>Find Friends</p>
          </a>
          <a href="https://www.facebook.com/watch" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavVideo'></div><p>Video</p>
          </a>
          <a href="https://www.facebook.com/saved/?cref=28" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavSaved'></div><p>Saved</p>
          </a>
          <a href="https://www.facebook.com/?filter=all&sk=h_chr" className="sidenavLinks">
          <img className='sidenavAds' src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeG5LJA7b_EZNrD3lq8kZD_qi9AM8exRZGeL0Azx7FFkZ_D9ZofvmQqRMOp5IC64noyXjpoNX7xA1H2iSGyZUELj" width="100%" height="100%" />
          <p>Feeds</p>
          </a>
          <a href="https://www.facebook.com/groups/feed/" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavGroups'></div><p>Groups</p>
          </a>
          <a href="https://www.facebook.com/marketplace/?ref=bookmark" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavMarketplace'></div><p>Marketplace</p>
          </a>
          <a href="https://www.facebook.com/watch" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavMemories'></div><p>Memories</p>
          </a>
          <a href="https://www.facebook.com/pages/?category=top&ref=bookmarks" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavPages'></div><p>Pages</p>
          </a>
          <a href="https://www.facebook.com/events?source=46&action_history=null" className="sidenavLinks">
            <div width="100%" height="100%" className='sidenavEvents'></div><p>Events</p>
          </a>
          <a href="https://adsmanager.facebook.com/adsmanager/onboarding?nav_source=comet&nav_entry_point=comet_bookmark&campaign_id=415838275119884&placement=bkmk_admgr&extra_1=campaign&act=950773305439166&breakdown_regrouping=1" className="sidenavLinks">
            <img className='sidenavAds' src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png?_nc_eui2=AeEDJ1qDisBIVY-zo3hDrP-WBVgHmttzSfIFWAea23NJ8tuhW3HPMWSz1C197EnAx66-JCPssYSvzg499FiBRyQj" width="100%" height="100%" />
            <p>Ads Manager</p>
          </a>
         { show ? 
          <div></div> 
          : 
          <div>
            <a href="https://www.facebook.com/climatescienceinfo/" className="sidenavLinks">
              <img className='sidenavAds' src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png?_nc_eui2=AeHblzM-LXPm8X6uNry2a6r-a1oEbyWYUilrWgRvJZhSKUhG04t6OC4RL-nX8XR29ZZTkXKp-vWfYEQwkBbPEcdy" width="100%" height="100%" />
              <p>Climate Science Center</p>
            </a>
            <a href="https://www.facebook.com/fundraisers/explore" className="sidenavLinks">
              <div className='sidenavFundraisers'></div><p>Fundraisers</p>
            </a>
            <a href="https://www.facebook.com/gaming/?external_ref=games_video_bookmark" className="sidenavLinks">
              <img className='sidenavAds' src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png?_nc_eui2=AeEBc3UH8bIet3Uxipor14Bee9VFok25NGt71UWiTbk0azq6pSx1i4F-uyCmr9GQDNv8uHJPQ11EkzjBVFDsPb0V" width="100%" height="100%" />
              <p>Gaming Video</p>
            </a>
            <a href="https://www.facebook.com/messages/t" className="sidenavLinks">
              <div className='sidenavMessenger'></div><p>Messenger</p>
            </a>
            <a href="https://www.facebook.com/messenger_kids/?referrer=bookmark" className="sidenavLinks">
              <img className='sidenavAds' src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/6Z9DShdc7zU.png?_nc_eui2=AeF-a7hzYk7-WaXL2PDQN1215Mouh8zlztDkyi6HzOXO0B3GIh-2jWTHNDJXkP8z0HSmwHuD4smBFDghM4YwCRgr" width="100%" height="100%" />
              <p>Messenger Kids</p>
            </a>
            <a href="https://secure.facebook.com/facebook_pay/?referrer=bookmark" className="sidenavLinks">
              <img className='sidenavAds' src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png?_nc_eui2=AeHhKrel7wjBveZrys5RivUABcsI70keWaQFywjvSR5ZpLgEXqLrORW2WW2J3tn13U6W_JFpxp4SA9IhEVFpXlKg" width="100%" height="100%" />    
              <div className='sidenavOrders'></div><p>Orders and payments</p>
            </a>
            <a href="https://www.facebook.com/gaming/play/?store_visit_source=games_bookmark" className="sidenavLinks">
              <div className='sidenavPlay'></div><p>Play Games</p>
            </a>
            <a href="https://www.facebook.com/ads/activity" className="sidenavLinks">
              <img className='sidenavAds' src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/x2_LFd7gCqg.png?_nc_eui2=AeFpsaohGpcGlg1UyGcra_KfC2aOHagedWgLZo4dqB51aPLuvoBLXrVBCwgg92kN8nJeJaaFRTD-F8gtZrZS-LGm" width="100%" height="100%" />    
              <div className='sidenavRecent'></div><p>Recent ad activity</p>
            </a>
          </div> 
          }    
        </div>
        <button onClick={showMore} className="sidenavsShowMore">{ show ? <div><svg viewBox="0 0 16 16" width="37" height="15" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>See More</div>: <div><svg viewBox="0 0 20 20" width="37" height="15" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" ><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg>See Less</div>}</button>
        
        <div className="sidenavFooterCont">
            <a href="https://www.facebook.com/privacy/policy/?entry_point=comet_dropdown">Privacy </a>  · 
            <a href="https://www.facebook.com/policies_center/">Terms </a> · 
            <a href="https://www.facebook.com/business">Advertising </a> · 
            <a href="https://www.facebook.com/help/568137493302217"> Ad Choices </a> · 
            <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies </a> · 
            <a href="">More </a> · 
            <p>Meta © 2023</p>
        </div>

      </div>
    </>
  )
};

export default Sidenav;
