---
layout: page
title: Research
permalink: /research/
---
Write a short overview of your research interests here - the questions you
care about, the methods you use, or how your projects connect. This is
regular Markdown, so paragraphs, links, and formatting all work normally.

## Publications

<ul class="entry-list-year">
  {% for item in site.data.research %}
  <li class="entry-year-row">
    <span class="entry-year">{{ item.date }}</span>
    <div class="entry-year-body">
      <h3 class="entry-title">
        {% if item.link and item.link != "" %}
          <a href="{{ item.link }}" target="_blank" rel="noopener">{{ item.title }}</a>
        {% else %}
          {{ item.title }}
        {% endif %}
      </h3>
      <p class="entry-meta">{{ item.authors }}{% if item.venue %} · {{ item.venue }}{% endif %}</p>
      <p class="entry-description">{{ item.description }}</p>
    </div>
  </li>
  {% endfor %}
</ul>
