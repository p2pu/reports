---
---
var tipuesearch = {
	"pages": [{% for report in site.reports %}
				{% if report.state and report.state == 'published' %}
					{% include report.json %}
				{% if forloop.last %}{% else %},{% endif %}
				{% endif %}
			{% endfor %}
			]};



