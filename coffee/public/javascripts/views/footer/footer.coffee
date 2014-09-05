define (require, exports, module) ->
  
  $ = require 'jquery'
  Backbone = require 'backbone'
  _ = require 'underscore'

  tpl = require '../../../tpl/footer.tpl'

  ThisView = Backbone.View.extend
    
    initialize: ->
      @render()

    events:
      'click li': 'footer'

    render: ->
      @$el.html _.template tpl, {}
      @

    footer: (e) ->
      self = @
      $this = $(e.currentTarget)
      view = $this.data 'view'
      switch view
        when 'cc'
        then self.creditCloud()
        
        when 'products'
        then self.products()

        when 'customers'
        then self.customers()

    creditCloud: ->
      Backbone.history.navigate "/page-cc", true

    products: ->
      Backbone.history.navigate "/page-products", true

    customers: ->
      Backbone.history.navigate "/page-customers", true

  module.exports = ThisView
