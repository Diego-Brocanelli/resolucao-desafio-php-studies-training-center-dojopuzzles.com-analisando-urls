
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:DiegoBrocanelli" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DiegoBrocanelli.html">DiegoBrocanelli</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:DiegoBrocanelli_URL" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DiegoBrocanelli/URL.html">URL</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:DiegoBrocanelli_URL_Analyzer" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DiegoBrocanelli/URL/Analyzer.html">Analyzer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:DiegoBrocanelli_URL_Analyzer_URLAnalyzer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html">URLAnalyzer</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:DiegoBrocanelli_URL_URL" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DiegoBrocanelli/URL/URL.html">URL</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:DiegoBrocanelli_Url" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DiegoBrocanelli/Url.html">Url</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:DiegoBrocanelli_Url_Analyzer" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DiegoBrocanelli/Url/Analyzer.html">Analyzer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:DiegoBrocanelli_Url_Analyzer_URLAnalyzerInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html">URLAnalyzerInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:DiegoBrocanelli_Url_URLInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DiegoBrocanelli/Url/URLInterface.html">URLInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "DiegoBrocanelli.html", "name": "DiegoBrocanelli", "doc": "Namespace DiegoBrocanelli"},{"type": "Namespace", "link": "DiegoBrocanelli/URL.html", "name": "DiegoBrocanelli\\URL", "doc": "Namespace DiegoBrocanelli\\URL"},{"type": "Namespace", "link": "DiegoBrocanelli/URL/Analyzer.html", "name": "DiegoBrocanelli\\URL\\Analyzer", "doc": "Namespace DiegoBrocanelli\\URL\\Analyzer"},{"type": "Namespace", "link": "DiegoBrocanelli/Url.html", "name": "DiegoBrocanelli\\Url", "doc": "Namespace DiegoBrocanelli\\Url"},{"type": "Namespace", "link": "DiegoBrocanelli/Url/Analyzer.html", "name": "DiegoBrocanelli\\Url\\Analyzer", "doc": "Namespace DiegoBrocanelli\\Url\\Analyzer"},
            {"type": "Interface", "fromName": "DiegoBrocanelli\\Url\\Analyzer", "fromLink": "DiegoBrocanelli/Url/Analyzer.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method___construct", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getProtocol", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getProtocol", "doc": "&quot;Return the protocol type&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getHost", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getHost", "doc": "&quot;return the host&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getDomain", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getDomain", "doc": "&quot;return the domain&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getPath", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getPath", "doc": "&quot;return the path&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getParameters", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getParameters", "doc": "&quot;return the parameters of url&quot;"},
            
            {"type": "Interface", "fromName": "DiegoBrocanelli\\Url", "fromLink": "DiegoBrocanelli/Url.html", "link": "DiegoBrocanelli/Url/URLInterface.html", "name": "DiegoBrocanelli\\Url\\URLInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\URLInterface", "fromLink": "DiegoBrocanelli/Url/URLInterface.html", "link": "DiegoBrocanelli/Url/URLInterface.html#method___construct", "name": "DiegoBrocanelli\\Url\\URLInterface::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\URLInterface", "fromLink": "DiegoBrocanelli/Url/URLInterface.html", "link": "DiegoBrocanelli/Url/URLInterface.html#method_getURL", "name": "DiegoBrocanelli\\Url\\URLInterface::getURL", "doc": "&quot;Return the URL&quot;"},
            
            
            {"type": "Class", "fromName": "DiegoBrocanelli\\URL\\Analyzer", "fromLink": "DiegoBrocanelli/URL/Analyzer.html", "link": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html", "name": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer", "fromLink": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html", "link": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html#method___construct", "name": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer", "fromLink": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html", "link": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html#method_getProtocol", "name": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer::getProtocol", "doc": "&quot;Return the protocol type\n   - HTTP or HTTPS&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer", "fromLink": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html", "link": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html#method_getHost", "name": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer::getHost", "doc": "&quot;return the host&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer", "fromLink": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html", "link": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html#method_getDomain", "name": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer::getDomain", "doc": "&quot;return the domain&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer", "fromLink": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html", "link": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html#method_getPath", "name": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer::getPath", "doc": "&quot;return the path&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer", "fromLink": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html", "link": "DiegoBrocanelli/URL/Analyzer/URLAnalyzer.html#method_getParameters", "name": "DiegoBrocanelli\\URL\\Analyzer\\URLAnalyzer::getParameters", "doc": "&quot;return the parameters of url&quot;"},
            
            {"type": "Class", "fromName": "DiegoBrocanelli\\URL", "fromLink": "DiegoBrocanelli/URL.html", "link": "DiegoBrocanelli/URL/URL.html", "name": "DiegoBrocanelli\\URL\\URL", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\URL", "fromLink": "DiegoBrocanelli/URL/URL.html", "link": "DiegoBrocanelli/URL/URL.html#method___construct", "name": "DiegoBrocanelli\\URL\\URL::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\URL\\URL", "fromLink": "DiegoBrocanelli/URL/URL.html", "link": "DiegoBrocanelli/URL/URL.html#method_getURL", "name": "DiegoBrocanelli\\URL\\URL::getURL", "doc": "&quot;Return the protocol type&quot;"},
            
            {"type": "Class", "fromName": "DiegoBrocanelli\\Url\\Analyzer", "fromLink": "DiegoBrocanelli/Url/Analyzer.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method___construct", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getProtocol", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getProtocol", "doc": "&quot;Return the protocol type&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getHost", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getHost", "doc": "&quot;return the host&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getDomain", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getDomain", "doc": "&quot;return the domain&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getPath", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getPath", "doc": "&quot;return the path&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface", "fromLink": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html", "link": "DiegoBrocanelli/Url/Analyzer/URLAnalyzerInterface.html#method_getParameters", "name": "DiegoBrocanelli\\Url\\Analyzer\\URLAnalyzerInterface::getParameters", "doc": "&quot;return the parameters of url&quot;"},
            
            {"type": "Class", "fromName": "DiegoBrocanelli\\Url", "fromLink": "DiegoBrocanelli/Url.html", "link": "DiegoBrocanelli/Url/URLInterface.html", "name": "DiegoBrocanelli\\Url\\URLInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\URLInterface", "fromLink": "DiegoBrocanelli/Url/URLInterface.html", "link": "DiegoBrocanelli/Url/URLInterface.html#method___construct", "name": "DiegoBrocanelli\\Url\\URLInterface::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DiegoBrocanelli\\Url\\URLInterface", "fromLink": "DiegoBrocanelli/Url/URLInterface.html", "link": "DiegoBrocanelli/Url/URLInterface.html#method_getURL", "name": "DiegoBrocanelli\\Url\\URLInterface::getURL", "doc": "&quot;Return the URL&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


