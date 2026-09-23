{% assign roster_lang = page.lang | default: 'en' %}
<ul class="roster-cards" aria-label="{{ site.data.ui[roster_lang].roster_title }}">
  {% for member in site.data.roster %}
    {% assign role = member.role_en %}
    {% if roster_lang == 'ru' %}{% assign role = member.role_ru %}{% endif %}
    {% assign initials = member.name | slice: 0, 2 | upcase %}
    {% assign avatar_path = '/assets/img/roster/' | append: member.avatar | append: '.webp' %}
    {% assign avatar_file = nil %}
    {% if member.avatar != empty %}
      {% assign avatar_file = site.static_files | where: 'path', avatar_path | first %}
    {% endif %}
    <li class="member-card{% if member.featured %} featured{% endif %}{% if member.staff %} staff{% endif %}">
      <div class="member-avatar">
        {% if avatar_file %}
          <img src="{{ avatar_path | relative_url }}" alt="{{ member.name }}" width="76" height="76" loading="lazy" decoding="async">
        {% else %}
          <span class="member-avatar-fallback" aria-hidden="true">{{ initials }}</span>
        {% endif %}
      </div>
      <div class="member-copy">
        <div class="member-name-row">
          <strong>{{ member.name }}</strong>
          {% if member.featured %}<span class="member-mark">{% if roster_lang == 'ru' %}КАПИТАН{% else %}CAPTAIN{% endif %}</span>{% endif %}
          {% if member.staff %}<span class="member-mark staff-mark">{% if roster_lang == 'ru' %}ШТАБ{% else %}STAFF{% endif %}</span>{% endif %}
        </div>
        {% if role != empty %}<span class="member-role">{{ role }}</span>{% endif %}
        {% if member.positions != empty %}
          <div class="member-positions" aria-label="{% if roster_lang == 'ru' %}Позиции{% else %}Positions{% endif %}">
            {% for pos in member.positions %}
              {% assign pos_name = '' %}
              {% if roster_lang == 'ru' %}
                {% case pos %}
                  {% when '1' %}{% assign pos_name = 'КЕРРИ' %}
                  {% when '2' %}{% assign pos_name = 'МИД' %}
                  {% when '3' %}{% assign pos_name = 'ХАРД' %}
                  {% when '4' %}{% assign pos_name = 'САППОРТ' %}
                  {% when '5' %}{% assign pos_name = 'ФУЛЛ-САП' %}
                  {% when '6' %}{% assign pos_name = 'БУБНА' %}
                {% endcase %}
              {% else %}
                {% case pos %}
                  {% when '1' %}{% assign pos_name = 'CARRY' %}
                  {% when '2' %}{% assign pos_name = 'MID' %}
                  {% when '3' %}{% assign pos_name = 'OFF' %}
                  {% when '4' %}{% assign pos_name = 'SUPPORT' %}
                  {% when '5' %}{% assign pos_name = 'HARD SUPPORT' %}
                  {% when '6' %}{% assign pos_name = 'BUBNA' %}
                {% endcase %}
              {% endif %}
              <span class="position-chip">
  <img src="{{ '/assets/img/positions/position-' | append: pos | append: '.svg' | relative_url }}" alt="" width="20" height="20" loading="lazy" decoding="async">
  <b>{{ pos }}</b><small>{{ pos_name }}</small>
</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
      <span class="member-index" aria-hidden="true">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
    </li>
  {% endfor %}
</ul>
