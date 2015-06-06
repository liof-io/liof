$(document).on "page:change", ->

  suggestions = new Bloodhound(
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name')
    queryTokenizer: Bloodhound.tokenizers.whitespace
    remote:
      url: Routes.autocomplete_path()+'?q=%QUERY',
      wildcard: '%QUERY')

  $('.react-tagsinput-input').typeahead {
    hint: false
    highlight: true
    minLength: 1

  },
    name: 'hits',
    display: 'name',
    source: suggestions,
    limit: 10
