console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('<div class="two_block click_h5">
                    
                        <h5 class="click_h5">
                            <label id="lnId_29588" class="img2" style="cursor:pointer"></label>
                            <a title="预警信号" href="../">预警信号</a>
                        </h5>

                        <ol class="p_class" style="">
                            
                                <li id="zlnId_29589"><a title="北京市" href="../bjs/">北京市</a></li>
                            
                                <li id="zlnId_29604"><a title="东城区" href="../dcq/">东城区</a></li>
                            
                                <li id="zlnId_29605"><a title="西城区" href="../xcq/">西城区</a></li>
                            
                                <li id="zlnId_29590" class="row"><a title="朝阳区" href="./">朝阳区</a></li>
                            
                                <li id="zlnId_29597"><a title="海淀区" href="../hdq/">海淀区</a></li>
                            
                                <li id="zlnId_29594"><a title="丰台区" href="../ftq/">丰台区</a></li>
                            
                                <li id="zlnId_29599"><a title="石景山区" href="../sjsq/">石景山区</a></li>
                            
                                <li id="zlnId_29598"><a title="门头沟区" href="../mtgq/">门头沟区</a></li>
                            
                                <li id="zlnId_29602"><a title="房山区" href="../fsq/">房山区</a></li>
                            
                                <li id="zlnId_29591"><a title="通州区" href="../tzq/">通州区</a></li>
                            
                                <li id="zlnId_29593"><a title="顺义区" href="../syq/">顺义区</a></li>
                            
                                <li id="zlnId_29601"><a title="大兴区" href="../dxq/">大兴区</a></li>
                            
                                <li id="zlnId_29603"><a title="昌平区" href="../cpq/">昌平区</a></li>
                            
                                <li id="zlnId_29592"><a title="平谷区" href="../pgq/">平谷区</a></li>
                            
                                <li id="zlnId_29600"><a title="怀柔区" href="../hrq/">怀柔区</a></li>
                            
                                <li id="zlnId_29596"><a title="密云区" href="../myq/">密云区</a></li>
                            
                                <li id="zlnId_29595"><a title="延庆区" href="../yqq/">延庆区</a></li>
                            
                        </ol>

                    
                        <h5>
                            <label id="lnId_29607" class="img1" style="cursor:pointer"></label>
                            <a title="雷达图" href="../../ldt/">雷达图</a>
                        </h5>

                        <ol class="p_class" style="display:none">
                            
                        </ol>

                    
                    <script>
                        $("#lnId_29588").parents().addClass("click_h5")');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('
                        $("#lnId_29588").addClass("img2").removeClass("img1")');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector('
                        $("#lnId_29588").parents().next("ol").show()');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('
                        $("#zlnId_29590").addClass("row")');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector('
                        $("#nav_29587").addClass("head_sel")');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector('
                    </script>
                </div>');
                if (element5) {
                    element5.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
