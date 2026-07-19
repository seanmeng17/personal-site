---
layout: page
title: Writing
permalink: /writing/
---
{% assign all_writing = site.writing | sort: "date" | reverse %}

<div class="writing-tabs" role="tablist">
  <button class="tab-btn active" data-filter="all">All</button>
  <button class="tab-btn" data-filter="essay">Essays</button>
  <button class="tab-btn" data-filter="shortform">Shortform</button>
</div>

<ul class="writing-list" id="writing-list">
  {% for item in all_writing %}
  <li class="writing-list-item" data-type="{{ item.type | default: 'essay' }}">
    <span class="writing-date">{{ item.date | date: "%m.%d.%Y" }}</span>
    <div class="writing-list-item-body">
      <a href="{% if item.external_url %}{{ item.external_url }}{% else %}{{ item.url | relative_url }}{% endif %}"
         {% if item.external_url %}target="_blank" rel="noopener"{% endif %}>
        {{ item.title }}
      </a>
      {% if item.excerpt_override %}<p class="writing-excerpt">{{ item.excerpt_override }}</p>{% endif %}
    </div>
  </li>
  {% endfor %}
</ul>
